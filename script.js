document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("services-grid");
  const frame = document.getElementById("cal-frame");
  const fallback = document.getElementById("booking-fallback");
  const externalLink = document.getElementById("external-booking-link");
  const bookingSummary = document.getElementById("booking-summary");

  const bookingTitle = document.getElementById("booking-title");
  const bookingDescription = document.getElementById("booking-description");
  const summaryName = document.getElementById("summary-name");
  const summaryDuration = document.getElementById("summary-duration");
  const summaryPrice = document.getElementById("summary-price");

  function euro(value) {
    return new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0
    }).format(value);
  }

  function renderServices() {
    grid.innerHTML = SERVICES.map(service => `
      <article class="service-card ${service.featured ? "featured" : ""}">
        <p class="service-tag">${service.tag}</p>
        <h3>${service.name}</h3>
        <p class="service-duration">${service.duration}</p>
        <div class="service-price">${euro(service.price)}</div>
        <p class="service-description">${service.description}</p>
        <button class="btn btn-primary btn-full" data-service-id="${service.id}">
          Prenota
        </button>
      </article>
    `).join("");

    grid.querySelectorAll("[data-service-id]").forEach(button => {
      button.addEventListener("click", () => {
        const service = SERVICES.find(s => s.id === button.dataset.serviceId);
        selectService(service);
      });
    });
  }

  function selectService(service) {
    bookingTitle.textContent = service.name;
    bookingDescription.textContent = service.description;
    summaryName.textContent = service.name;
    summaryDuration.textContent = service.duration;
    summaryPrice.textContent = euro(service.price);
    bookingSummary.hidden = false;

    const hasCalLink = service.calLink &&
      !service.calLink.startsWith("YOUR-CAL-LINK");

    if (!hasCalLink) {
      frame.src = "about:blank";
      frame.style.display = "none";
      fallback.style.display = "block";
      externalLink.hidden = true;
    } else {
      const bookingUrl = `https://cal.com/${service.calLink}?embed=true`;
      frame.src = bookingUrl;
      frame.style.display = "block";
      fallback.style.display = "none";
      externalLink.href = `https://cal.com/${service.calLink}`;
      externalLink.hidden = false;
    }

    document.getElementById("prenota").scrollIntoView({ behavior: "smooth" });
  }

  renderServices();
});
