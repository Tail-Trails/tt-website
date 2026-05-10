import * as React from "react";
import { useLocation } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const FinalizeAccountDeletion: React.FC = () => {
  const location = useLocation();
  const [userId, setUserId] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const qp = new URLSearchParams(location.search);
    const id = qp.get("user_id") || qp.get("userId");
    if (id) setUserId(id);
  }, [location.search]);

  const onDelete = async () => {
    if (!userId) {
      toast({ title: "Missing user id in the URL." });
      return;
    }

    setLoading(true);
    try {
      const envBase = (import.meta as any).env?.VITE_API_URL as string | undefined;
      const base = envBase ? envBase.replace(/\/$/, "") : "http://localhost:8080";
      const url = `${base}/account/me?user_id=${encodeURIComponent(userId)}`;

      const res = await fetch(url, { method: "DELETE" });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Status ${res.status}`);
      }

      toast({ title: "Account deleted", description: "Your account has been removed." });
      setTimeout(() => {
        window.location.href = "/";
      }, 700);
    } catch (err: any) {
      toast({ title: "Error", description: err?.message ?? String(err) });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-bg-primary">
      <section className="pt-20 pb-20">
        <div className="container mx-auto max-w-4xl px-6 min-h-[60vh] flex items-center">
          <div className="bento-card">
            <h3 className="text-center text-2xl md:text-3xl font-semibold text-text-primary mb-6">Finalize account deletion</h3>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 flex items-center justify-center md:justify-start">
                <div className="flex items-center gap-6">
                  <div className="w-40 h-40 bg-accent-primary rounded-full flex items-center justify-center border border-border-subtle/40">
                    <img src="/tailtrails-logo.png" alt="TailTrails Logo" className="w-24 h-24" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-text-primary">TailTrails</div>
                    <div className="text-sm text-text-muted">This action will permanently delete your account</div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[350px]">
                <div className="glass rounded-2xl p-6">
                  {userId ? (
                    <div className="space-y-4">
                      <div>
                        <button
                          onClick={onDelete}
                          className="w-full rounded-md bg-destructive hover:bg-destructive/90 text-bg-primary font-semibold py-6 hover:opacity-95 disabled:opacity-60"
                          disabled={loading}
                        >
                          {loading ? "Deleting..." : "Delete my account"}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-sm text-text-muted">Invalid or expired deletion link.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FinalizeAccountDeletion;
