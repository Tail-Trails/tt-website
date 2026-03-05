import * as React from "react";
import { toast } from "@/components/ui/use-toast";

const Waitlist: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast({ title: "Please provide name and email." });
      return;
    }

    setLoading(true);
    try {
      const envBase = (import.meta as any).env?.VITE_API_URL as string | undefined;
      const base = envBase ? envBase.replace(/\/$/, "") : "http://localhost:8080";
      const url = `${base}/waitlist?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;

      const res = await fetch(url, { method: "POST" });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Status ${res.status}`);
      }

      toast({ title: "Success", description: "You've been added to the waitlist." });
      setName("");
      setEmail("");
    } catch (err: any) {
      toast({ title: "Error", description: err?.message ?? String(err) });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-20 pb-20">
        <div className="container mx-auto max-w-4xl px-6 min-h-[60vh] flex items-center">
          <div className="bg-primary/10 rounded-lg shadow-lg p-8">
            <h3 className="text-center text-2xl md:text-3xl font-semibold text-foreground mb-6">Be the first to know as soon as the TailTrails App is live</h3>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 flex items-center justify-center md:justify-start">
                <div className="flex items-center gap-6">
                  <div className="w-40 h-40 bg-card rounded-full flex items-center justify-center">
                    <img src="/tailtrails-logo.png" alt="TailTrails Logo" className="w-24 h-24" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">TailTrails</div>
                    <div className="text-sm text-muted-foreground">Find trails tailored to your dog</div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[350px]">
                <div className="bg-primary rounded-lg p-6">
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                      <label className="sr-only">Name</label>
                      <input
                        className="w-full rounded-md border border-transparent px-3 py-2 placeholder-muted-foreground bg-card text-foreground"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        required
                      />
                    </div>

                    <div>
                      <label className="sr-only">Email</label>
                      <input
                        type="email"
                        className="w-full rounded-md border border-transparent px-3 py-2 placeholder-muted-foreground bg-card text-foreground"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email *"
                        required
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full rounded-md bg-white text-primary font-semibold py-2 hover:opacity-95 disabled:opacity-60"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Join our Pack"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Waitlist;
