import React, { useState } from 'react';
import { INITIAL_DOCUMENTS } from '../../data/mockData';
import { StudentDocument } from '../../types';
import { FolderLock, Upload, ShieldCheck, FileCheck, CheckCircle2, Clock, Trash2, ExternalLink } from 'lucide-react';

export const DocumentsTab: React.FC = () => {
  const [docs, setDocs] = useState<StudentDocument[]>(INITIAL_DOCUMENTS);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const newDoc: StudentDocument = {
        id: Date.now().toString(),
        title: file.name.split('.')[0] || 'Uploaded Document',
        category: 'Certificate',
        fileName: file.name,
        uploadDate: new Date().toISOString().split('T')[0],
        status: 'Verified',
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`
      };
      setDocs([newDoc, ...docs]);
    }
  };

  return (
    <div className="w-full space-y-4 text-left pb-6">
      {/* Banner */}
      <div className="p-4 rounded-2xl glass-panel border border-cyan-500/30 bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/40">
        <div className="flex items-center space-x-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
          <FolderLock className="w-4 h-4" />
          <span>256-Bit Encrypted Document Vault</span>
        </div>
        <h3 className="font-display font-bold text-lg text-white">
          Secure Academic Vault
        </h3>
        <p className="text-xs text-slate-300 mt-1">
          Store & share verified Class 10/12 marksheets, Aadhaar ID, and category certificates for instant admission forms.
        </p>
      </div>

      {/* Upload Box */}
      <div className="glass-panel p-4 rounded-2xl border border-dashed border-cyan-500/40 bg-slate-900/40 text-center hover:bg-slate-900/70 transition-colors relative">
        <input
          type="file"
          onChange={handleFileUpload}
          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
        />
        <Upload className="w-6 h-6 text-cyan-400 mx-auto mb-1.5 animate-bounce" />
        <p className="text-xs font-bold text-cyan-200">Tap to upload marksheets, certificates or photos</p>
        <p className="text-[10px] text-slate-400 mt-0.5">Supports PDF, JPG, PNG up to 10MB</p>
      </div>

      {/* Documents List */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider px-1">
          Your Stored Academic Documents ({docs.length})
        </h4>

        {docs.map((doc) => (
          <div
            key={doc.id}
            className="glass-panel p-3.5 rounded-2xl border border-white/10 hover:border-cyan-400/30 bg-slate-900/60 flex items-center justify-between text-xs"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-slate-100 text-xs">{doc.title}</h5>
                <p className="text-[10px] text-slate-400 font-mono">{doc.fileName} • {doc.size}</p>
                <div className="flex items-center space-x-1 mt-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span className="text-[10px] text-emerald-400 font-semibold">{doc.status}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setDocs(docs.filter(d => d.id !== doc.id))}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-rose-400 transition-colors"
              title="Delete document"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
