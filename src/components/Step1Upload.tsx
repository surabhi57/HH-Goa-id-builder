import React, { useRef } from 'react';
import { Upload, Camera, ZoomIn, Move, ArrowRight, Trash2 } from 'lucide-react';
import type { BuilderData } from '../types';

interface Step1UploadProps {
  data: BuilderData;
  onChange: (updates: Partial<BuilderData>) => void;
  onNext: () => void;
}

export const Step1Upload: React.FC<Step1UploadProps> = ({ data, onChange, onNext }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onChange({ photoUrl: event.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onChange({ photoUrl: event.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="step-card fade-in">
      <div className="step-header">
        <div className="step-badge">🌊 Stage 01 • DISCOVER</div>
        <h2 className="step-heading">Upload Your Builder Photo</h2>
        <p className="step-subheading">
          Every pass is 100% authentic. Add your real photo for your official collectible HH Goa 2026 Pass!
        </p>
      </div>

      <div className="upload-section">
        {data.photoUrl ? (
          <div className="avatar-preview-wrapper">
            <div className="avatar-preview-box">
              <div className="avatar-preview-circle">
                <img
                  src={data.photoUrl}
                  alt="Avatar preview"
                  style={{
                    transform: `scale(${data.photoZoom}) translate(${data.photoOffsetX}px, ${data.photoOffsetY}px)`,
                  }}
                />
              </div>
              <div className="avatar-badge-icon">⚡</div>
            </div>

            {/* Photo Adjustments */}
            <div className="photo-controls">
              <div className="control-group">
                <label className="control-label">
                  <ZoomIn className="w-4 h-4 text-yellow-400" />
                  <span>Zoom ({Math.round(data.photoZoom * 100)}%)</span>
                </label>
                <input
                  type="range"
                  min="0.8"
                  max="2.5"
                  step="0.05"
                  value={data.photoZoom}
                  onChange={(e) => onChange({ photoZoom: parseFloat(e.target.value) })}
                  className="range-slider"
                />
              </div>

              <div className="control-group">
                <label className="control-label">
                  <Move className="w-4 h-4 text-yellow-400" />
                  <span>Position Shift</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="range"
                    min="-40"
                    max="40"
                    value={data.photoOffsetX}
                    onChange={(e) => onChange({ photoOffsetX: parseInt(e.target.value) })}
                    className="range-slider"
                    title="Horizontal shift"
                  />
                  <input
                    type="range"
                    min="-40"
                    max="40"
                    value={data.photoOffsetY}
                    onChange={(e) => onChange({ photoOffsetY: parseInt(e.target.value) })}
                    className="range-slider"
                    title="Vertical shift"
                  />
                </div>
              </div>

              <div className="flex gap-2 justify-center pt-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="btn-secondary text-xs py-2 px-3"
                >
                  <Camera className="w-3.5 h-3.5" />
                  Change Photo
                </button>
                <button
                  type="button"
                  onClick={() => onChange({ photoUrl: null })}
                  className="btn-danger-light text-xs py-2 px-3"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Remove
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="dropzone"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="dropzone-icon-bg">
              <Upload className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="dropzone-title">Click or Drag & Drop Photo</h3>
            <p className="dropzone-subtitle">Supports JPG, PNG, WEBP up to 10MB</p>
            <button type="button" className="btn-primary-gradient mt-4 py-3 px-6 text-sm">
              <Camera className="w-4 h-4" />
              Choose Photo
            </button>
          </div>
        )}

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
      </div>

      <div className="step-actions">
        <div></div>
        <button
          onClick={onNext}
          disabled={!data.photoUrl}
          className="btn-primary-gradient"
        >
          <span>Continue to Define</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
