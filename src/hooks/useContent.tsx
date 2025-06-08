
import { useState, useEffect } from 'react';
import { SiteContent } from '../types/content';
import contentData from '../data/content.json';

export const useContent = () => {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // In the future, this could fetch from a CMS API
      setContent(contentData as SiteContent);
      setLoading(false);
    } catch (err) {
      setError('Failed to load content');
      setLoading(false);
    }
  }, []);

  const updateContent = (section: keyof SiteContent, data: any) => {
    if (content) {
      setContent({
        ...content,
        [section]: { ...content[section], ...data }
      });
    }
  };

  return {
    content,
    loading,
    error,
    updateContent
  };
};
