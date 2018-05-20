console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Notified by Reid",
    icon: "https://media.licdn.com/dms/image/C4E03AQGgwe3UP07EcQ/profile-displayphoto-shrink_200_200/0?e=1532563200&v=beta&t=VYLoeFckQ8niaqmrtcZbfoG6iYkEOOND0sz0GqWm-po"
  });
});
