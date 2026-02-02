// ================= LOGO ZOOM MODAL =================
const logo = document.getElementById('logoZoom');
const logoModal = document.getElementById('logoModal');
const closeLogo = document.getElementById('closeLogo');

if (logo && logoModal && closeLogo) {
    logo.addEventListener('click', () => {
        logoModal.classList.add('active');
    });

    closeLogo.addEventListener('click', () => {
        logoModal.classList.remove('active');
    });

    logoModal.addEventListener('click', (e) => {
        if (e.target === logoModal) {
            logoModal.classList.remove('active');
        }
    });
}

// ================= NEPALI DATE & TIME =================
const dateTimeEl = document.getElementById('navDateTime');

// Convert English numbers to Nepali
function toNepaliNumber(num) {
    const nepNum = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    return num.toString().split('').map(d => nepNum[d] || d).join('');
}

// Approximate AD → BS
function getNepaliDate(adDate) {
    let bsYear = adDate.getFullYear() + 56;
    let bsMonth = adDate.getMonth() + 9;
    if (bsMonth > 12) {
        bsMonth -= 12;
        bsYear += 1;
    }
    let bsDay = adDate.getDate();
    return `${toNepaliNumber(bsYear)}-${toNepaliNumber(bsMonth.toString().padStart(2, '0'))}-${toNepaliNumber(bsDay.toString().padStart(2, '0'))}`;
}

function updateDateTime() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const nepalTime = new Date(utc + (5.75 * 60 * 60 * 1000));

    const englishDate = nepalTime.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
    const time = nepalTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const nepaliDate = getNepaliDate(nepalTime);

    if (dateTimeEl) {
        dateTimeEl.textContent = `${englishDate} | ${nepaliDate} | ${time} NST`;
    }
}

updateDateTime();
setInterval(updateDateTime, 1000);
