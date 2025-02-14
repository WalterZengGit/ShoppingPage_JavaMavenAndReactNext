const API_BASE_URL = "http://localhost:8080/api";

export async function fetchCarousel() {
  const res = await fetch(`${API_BASE_URL}/carousel`);
  return res.json();
}

export async function fetchAbout() {
  const res = await fetch(`${API_BASE_URL}/about`);
  return res.json();
}

export async function fetchPlans() {
  const res = await fetch(`${API_BASE_URL}/plans`);
  return res.json();
}