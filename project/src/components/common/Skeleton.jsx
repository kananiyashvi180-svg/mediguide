export function SkeletonCard() {
  return (
    <div style={{
      background: '#fff', borderRadius: 16, border: '1.5px solid #e2e8f0', overflow: 'hidden',
    }}>
      {/* Image placeholder */}
      <div className="skeleton" style={{ height: 160, borderRadius: 0 }} />
      {/* Body */}
      <div style={{ padding: '14px 16px 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, gap: 8 }}>
          <div>
            <div className="skeleton" style={{ height: 14, width: 140, marginBottom: 6 }} />
            <div className="skeleton" style={{ height: 11, width: 90 }} />
          </div>
          <div className="skeleton" style={{ height: 20, width: 40, borderRadius: 8, flexShrink: 0 }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 10 }}>
          <div className="skeleton" style={{ height: 52, borderRadius: 10 }} />
          <div className="skeleton" style={{ height: 52, borderRadius: 10 }} />
          <div className="skeleton" style={{ height: 52, borderRadius: 10 }} />
        </div>
        <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
          <div className="skeleton" style={{ height: 20, width: 50, borderRadius: 999 }} />
          <div className="skeleton" style={{ height: 20, width: 64, borderRadius: 999 }} />
          <div className="skeleton" style={{ height: 20, width: 44, borderRadius: 999 }} />
        </div>
        <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="skeleton" style={{ height: 20, width: 60 }} />
          <div className="skeleton" style={{ height: 34, width: 110, borderRadius: 9 }} />
        </div>
      </div>
    </div>
  );
}

export function SkeletonList() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} style={{ background: '#fff', borderRadius: 12, padding: '12px 14px', border: '1.5px solid #f1f5f9', display: 'flex', gap: 12 }}>
          <div className="skeleton" style={{ width: 52, height: 52, borderRadius: 10, flexShrink: 0 }} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 7 }}>
            <div className="skeleton" style={{ height: 13, width: '65%' }} />
            <div className="skeleton" style={{ height: 10, width: '40%' }} />
            <div className="skeleton" style={{ height: 10, width: '50%' }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function SkeletonText({ lines = 3 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="skeleton" style={{ height: 14, width: i === lines - 1 ? '60%' : '100%' }} />
      ))}
    </div>
  );
}
