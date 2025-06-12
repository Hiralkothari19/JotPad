// src/lib/utils.js
export function formatDate(date) {
    if (!date) return "Invalid Date"; // Handles null/undefined date inputs
    const d = new Date(date);
    if (isNaN(d.getTime())) return "Invalid Date"; // Handles truly unparseable date strings
    return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}