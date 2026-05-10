import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import Waitlist from "./pages/Waitlist";
import RequestAccountDeletion from "./pages/RequestAccountDeletion";
import FinalizeAccountDeletion from "./pages/FinalizeAccountDeletion";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import CookieConsent from "./components/ui/CookieConsent";
import { ToastProvider, ToastViewport } from "./components/ui/toast";
import Toaster from "./components/ui/Toaster";

const App = () => (
  <>
    <ToastProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/forget-me" element={<RequestAccountDeletion />} />
        <Route path="/finalize-forget-me" element={<FinalizeAccountDeletion />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
      <ToastViewport />
    </ToastProvider>
    <CookieConsent />
  </>
);

export default App;
