
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useContent } from '../hooks/useContent';
import { Settings } from 'lucide-react';

const ContentManager = () => {
  const { content, updateContent } = useContent();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  if (!content) return null;

  const handleSave = (section: string, data: any) => {
    updateContent(section as any, data);
    setIsOpen(false);
  };

  const renderHeroEditor = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="headline">Headline</Label>
        <Textarea
          id="headline"
          defaultValue={content.hero.headline}
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="subheadline">Subheadline</Label>
        <Textarea
          id="subheadline"
          defaultValue={content.hero.subheadline}
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="ctaText">CTA Button Text</Label>
        <Input
          id="ctaText"
          defaultValue={content.hero.ctaText}
          className="mt-1"
        />
      </div>
    </div>
  );

  const renderAboutEditor = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="aboutTitle">Title</Label>
        <Input
          id="aboutTitle"
          defaultValue={content.about.title}
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="aboutSubtitle">Subtitle</Label>
        <Textarea
          id="aboutSubtitle"
          defaultValue={content.about.subtitle}
          className="mt-1"
        />
      </div>
      {content.about.founders.map((founder, index) => (
        <div key={founder.name} className="border p-4 rounded">
          <h4 className="font-medium mb-2">Founder {index + 1}</h4>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor={`founderName${index}`}>Name</Label>
              <Input
                id={`founderName${index}`}
                defaultValue={founder.name}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor={`founderEmail${index}`}>Email</Label>
              <Input
                id={`founderEmail${index}`}
                defaultValue={founder.email}
                className="mt-1"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderEditor = () => {
    switch (activeSection) {
      case 'hero':
        return renderHeroEditor();
      case 'about':
        return renderAboutEditor();
      default:
        return <div>Select a section to edit</div>;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="fixed bottom-4 right-4 z-50"
        >
          <Settings className="h-4 w-4 mr-2" />
          Edit Content
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Content Management</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Section Selector */}
          <div className="space-y-2">
            <h3 className="font-medium">Sections</h3>
            {Object.keys(content).map((section) => (
              <Button
                key={section}
                variant={activeSection === section ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveSection(section)}
                className="w-full justify-start"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
          </div>
          
          {/* Content Editor */}
          <div className="md:col-span-3">
            <h3 className="font-medium mb-4">
              Edit {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
            </h3>
            {renderEditor()}
            
            <div className="flex justify-end space-x-2 mt-6">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => handleSave(activeSection, {})}>
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContentManager;
