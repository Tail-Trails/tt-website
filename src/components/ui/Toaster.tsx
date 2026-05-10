import * as React from "react";
import { useToast } from "@/components/ui/use-toast";
import { Toast, ToastTitle, ToastDescription, ToastClose } from "@/components/ui/toast";

const Toaster: React.FC = () => {
  const { toasts } = useToast();

  return (
    <>
      {toasts.map((t) => (
        <Toast
          key={t.id}
          open={t.open}
          onOpenChange={(open) => t.onOpenChange?.(open)}
          variant={(t as any).variant}
        >
          <div className="flex-1">
            {t.title && <ToastTitle>{t.title}</ToastTitle>}
            {t.description && <ToastDescription>{t.description}</ToastDescription>}
          </div>

          {t.action}

          <ToastClose />
        </Toast>
      ))}
    </>
  );
};

export default Toaster;
