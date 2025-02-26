document.getElementById('togglePosts').addEventListener('click', function() {
    const postsContainer = document.getElementById('postsContainer');
    const icon = this.querySelector('i');
    if (postsContainer.classList.contains('hidden')) {
        postsContainer.classList.remove('hidden');
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        postsContainer.classList.add('hidden');
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
});

document.getElementById('toggleWebsites').addEventListener('click', function() {
    const websitesContainer = document.getElementById('websitesContainer');
    const icon = this.querySelector('i');
    if (websitesContainer.classList.contains('hidden')) {
        websitesContainer.classList.remove('hidden');
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        websitesContainer.classList.add('hidden');
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
});

document.getElementById('themeToggle').addEventListener('click', function() {
    const body = document.body;
    const isDark = body.classList.contains('bg-gray-900');
    if (isDark) {
        body.classList.remove('bg-gray-900', 'text-gray-300');
        body.classList.add('bg-gray-100', 'text-gray-900');
        document.querySelectorAll('.bg-gray-800').forEach(el => {
            el.classList.remove('bg-gray-800');
            el.classList.add('bg-white');
        });
        document.querySelectorAll('.text-gray-100').forEach(el => {
            el.classList.remove('text-gray-100');
            el.classList.add('text-gray-900');
        });
        document.querySelectorAll('.text-gray-400').forEach(el => {
            el.classList.remove('text-gray-400');
            el.classList.add('text-gray-600');
        });
        document.querySelectorAll('.hover\\:text-gray-100').forEach(el => {
            el.classList.remove('hover:text-gray-100');
            el.classList.add('hover:text-gray-900');
        });
    } else {
        body.classList.remove('bg-gray-100', 'text-gray-900');
        body.classList.add('bg-gray-900', 'text-gray-300');
        document.querySelectorAll('.bg-white').forEach(el => {
            el.classList.remove('bg-white');
            el.classList.add('bg-gray-800');
        });
        document.querySelectorAll('.text-gray-900').forEach(el => {
            el.classList.remove('text-gray-900');
            el.classList.add('text-gray-100');
        });
        document.querySelectorAll('.text-gray-600').forEach(el => {
            el.classList.remove('text-gray-600');
            el.classList.add('text-gray-400');
        });
        document.querySelectorAll('.hover\\:text-gray-900').forEach(el => {
            el.classList.remove('hover:text-gray-900');
            el.classList.add('hover:text-gray-100');
        });
    }
});
