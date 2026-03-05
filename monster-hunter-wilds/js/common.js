function savePost(name, text) {
  const posts = JSON.parse(localStorage.getItem('mh_posts') || '[]');
  posts.push({ name, text, date: new Date().toLocaleString() });
  localStorage.setItem('mh_posts', JSON.stringify(posts));
}