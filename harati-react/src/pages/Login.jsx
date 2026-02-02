import React from 'react';

const Login = () => {
    return (
        <main className="login-page">
            <section className="login-content section fullwidth" style={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                <div style={{ width: '100%', maxWidth: '400px', background: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 15px 50px rgba(0,0,0,0.15)', border: '1px solid rgba(212,175,55,0.3)' }}>
                    <h2 style={{ color: '#5b0f0f', marginBottom: '30px', textAlign: 'center' }}>Admin Login</h2>
                    <form>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>Username</label>
                            <input type="text" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '10px', background: '#f9f9f9' }} />
                        </div>
                        <div style={{ marginBottom: '30px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>Password</label>
                            <input type="password" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '10px', background: '#f9f9f9' }} />
                        </div>
                        <button type="submit" className="add-booking-btn" style={{ width: '100%', padding: '15px' }}>Login</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Login;
