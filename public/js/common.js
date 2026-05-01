export function dataExport(name, email) {
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
}

export function getData() {
  return {
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email")
  };
}