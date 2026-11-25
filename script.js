document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("pigeon.json");
        if (!response.ok) return;
        const data = await response.json();

        // Update index.html elements if present
        const mainImg = document.getElementById("mainImage");
        const mainCap = document.getElementById("mainCaption");
        if (mainImg && data.mainImage) mainImg.src = data.mainImage;
        if (mainCap && data.mainCaption) mainCap.textContent = data.mainCaption;

        // Update snow.html elements if present
        const featImg = document.getElementById("featuredImage");
        const featCap = document.getElementById("featuredCaption");
        if (featImg && data.featuredImage) featImg.src = data.featuredImage;
        if (featCap && data.featuredCaption) featCap.textContent = data.featuredCaption;
    } catch (err) {
        console.error("Could not load pigeon.json:", err);
    }
});