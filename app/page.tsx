'use client';
import { useState, useEffect } from 'react';

export default function RegisterPage() {
  const [positions, setPositions] = useState<any[]>([]);
  const [formData, setFormData] = useState({ full_name: '', age: '', gender: 'Laki-laki', email: '', position_id: '' });
  const [loading, setLoading] = useState(false);
  const [successId, setSuccessId] = useState('');
  const [error, setError] = useState('');

  // Dummy posisi untuk contoh awal
  useEffect(() => {
    setPositions([
      { id: '1', position_name: 'Staff HRGA' },
      { id: '2', position_name: 'Teknisi / Maintenance' },
      { id: '3', position_name: 'Accounting & Tax Staff' },
    ]);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulasi penyimpanan sukses (nanti dihubungkan ke backend penuh)
    setTimeout(() => {
      const uniqueId = 'AST-' + new Date().getFullYear() + '-' + Math.random().toString(36).substring(2, 7).toUpperCase();
      setSuccessId(uniqueId);
      setLoading(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-slate-900">Portal Psikotes Rekrutmen</h1>
          <p className="text-sm text-slate-500 mt-1">PT Gama Abyakta Sejahtera</p>
        </div>

        {successId ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">✓</div>
            <h2 className="text-xl font-bold text-slate-900">Registrasi Berhasil!</h2>
            <p className="text-sm text-slate-600 mt-2">ID Asesmen Unik Anda:</p>
            <div className="bg-slate-100 py-2 px-4 rounded-lg font-mono font-bold text-blue-600 text-lg my-3">{successId}</div>
            <p className="text-xs text-slate-500">Silakan simpan ID ini dan tunggu instruksi selanjutnya dari tim HR.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Nama Lengkap</label>
              <input type="text" required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 text-sm" value={formData.full_name} onChange={e => setFormData({...formData, full_name: e.target.value})} placeholder="Masukkan nama lengkap" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Usia</label>
                <input type="number" required min="17" max="65" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 text-sm" value={formData.age} onChange={e => setFormData({...formData, age: e.target.value})} placeholder="25" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Gender</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm bg-white" value={formData.gender} onChange={e => setFormData({...formData, gender: e.target.value})}>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Email Aktif</label>
              <input type="email" required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 text-sm" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="nama@email.com" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Posisi yang Dilamar</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm bg-white" value={formData.position_id} onChange={e => setFormData({...formData, position_id: e.target.value})}>
                <option value="">-- Pilih Posisi --</option>
                {positions.map(p => <option key={p.id} value={p.id}>{p.position_name}</option>)}
              </select>
            </div>
            <button type="submit" disabled={loading} className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition shadow-md">
              {loading ? 'Memproses...' : 'Mulai Registrasi Asesmen'}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
