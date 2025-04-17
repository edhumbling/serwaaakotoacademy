
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import ScrollButton from "@/components/ScrollButton";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import GhanaianEducation from "./pages/GhanaianEducation";
import AISearch from "./pages/AISearch";
import IndexGlobe from "./pages/AISearchTools/IndexGlobe";
import Farfalle from "./pages/AISearchTools/Farfalle";
import TurboSeek from "./pages/AISearchTools/TurboSeek";
import Omniplex from "./pages/AISearchTools/Omniplex";
import AndiSearch from "./pages/AISearchTools/AndiSearch";
import EnrollNow from "./pages/EnrollNow";
import ApplyForJob from "./pages/ApplyForJob";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ScrollButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/ghanaian-education" element={<GhanaianEducation />} />
          <Route path="/ai-search" element={<AISearch />} />
          <Route path="/ai-search/index-globe" element={<IndexGlobe />} />
          <Route path="/ai-search/farfalle" element={<Farfalle />} />
          <Route path="/ai-search/turboseek" element={<TurboSeek />} />
          <Route path="/ai-search/omniplex" element={<Omniplex />} />
          <Route path="/ai-search/andi-search" element={<AndiSearch />} />
          <Route path="/enroll-now" element={<EnrollNow />} />
          <Route path="/apply-for-job" element={<ApplyForJob />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
