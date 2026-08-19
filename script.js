document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        lucide.createIcons();
    }
});
// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        if (isOpen) {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        } else {
            mobileMenu.classList.remove('hidden');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        }
    });
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });
}
// Project category filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => {
            b.classList.remove('active', 'bg-indigo-600', 'text-white');
            b.classList.add('bg-slate-900', 'text-slate-400');
        });
        btn.classList.add('active', 'bg-indigo-600', 'text-white');
        btn.classList.remove('bg-slate-900', 'text-slate-400');
        const filter = btn.getAttribute('data-filter');
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
// Modal Logic
const projectModal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalImg = document.getElementById('modal-img');
const modalTags = document.getElementById('modal-tags');
function openModal(title, desc, tags, imgSrc) {
    if (!projectModal) return;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalImg.src = imgSrc;
    modalTags.innerHTML = '';
    tags.forEach(tag => {
        const badge = document.createElement('span');
        badge.className = 'px-3 py-1 text-xs font-semibold rounded-full bg-slate-800 border border-slate-700 text-indigo-400';
        badge.textContent = tag;
        modalTags.appendChild(badge);
    });
    projectModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (window.lucide) lucide.createIcons();
}
function closeModal() {
    if (!projectModal) return;
    projectModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}
if (projectModal) {
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) closeModal();
    });
}
// Contact form simulation
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');
const toast = document.getElementById('toast');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        submitBtn.disabled = true;
        btnText.textContent = 'Mengirim...';
        setTimeout(() => {
            submitBtn.disabled = false;
            btnText.textContent = 'Kirim Pesan';
            contactForm.reset();
            toast.classList.remove('translate-y-24', 'opacity-0');
            toast.classList.add('translate-y-0', 'opacity-100');
            setTimeout(() => {
                toast.classList.remove('translate-y-0', 'opacity-100');
                toast.classList.add('translate-y-24', 'opacity-0');
            }, 3500);
        }, 1000);
    });
}
