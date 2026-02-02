import React from 'react';

const Login = () => {
    return (
        <main className="login-page">
            <section className="product-section section fullwidth" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: '440px', background: '#fff', padding: '60px', borderRadius: '30px', boxShadow: 'var(--shadow-premium)', border: '1px solid rgba(197, 160, 89, 0.2)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <img src="/img/s.png" alt="Harati Logo" style={{ height: '70px', marginBottom: '20px' }} />
                        <h2 style={{ fontSize: '32px' }}>Atelier Access</h2>
                        <p style={{ color: '#666' }}>Administrator sign-in</p>
                    </div>
                    <form>
                        <div style={{ marginBottom: '25px' }}>
                            <label style={{ display: 'block', marginBottom: '10px', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Username</label>
                            <input type="text" style={{ width: '100%', padding: '15px', border: '1px solid #eee', borderRadius: '12px', background: '#f9f9f9', fontFamily: 'inherit' }} />
                        </div>
                        <div style={{ marginBottom: '40px' }}>
                            <label style={{ display: 'block', marginBottom: '10px', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Password</label>
                            <input type="password" style={{ width: '100%', padding: '15px', border: '1px solid #eee', borderRadius: '12px', background: '#f9f9f9', fontFamily: 'inherit' }} />
                        </div>
                        <button type="submit" className="add-booking-btn" style={{ padding: '20px' }}>Authenticate</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Login;
