import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  initDataLayer,
  loadMarketingScripts,
  trackPageView,
} from '../../utils/analytics';

export default function AnalyticsProvider({ children }) {
  const location = useLocation();

  useEffect(() => {
    initDataLayer();
    loadMarketingScripts();
  }, []);

  useEffect(() => {
    const path = `${location.pathname}${location.search}`;
    trackPageView(path, document.title);
  }, [location.pathname, location.search]);

  return children;
}
