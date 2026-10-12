import experienceImage from "../images/experienceImage.webp";

export function loadContact() {
    const content = document.querySelector("#content");

    const contactSection = document.createElement("section");
    contactSection.classList.add("contact-section");

    // Header section
    const contactHeader = document.createElement("div");
    contactHeader.classList.add("contact-header");

    const contactTag = document.createElement("span");
    contactTag.classList.add("contact-tag");
    contactTag.textContent = "GET IN TOUCH";

    const contactTitle = document.createElement("h1");
    contactTitle.classList.add("contact-title");
    contactTitle.textContent = "Visit Us & Connect";

    const contactDesc = document.createElement("p");
    contactDesc.classList.add("contact-desc");
    contactDesc.textContent =
        "We invite you to reach out for reservations, private dining inquiries, or simply to share your experience at Aveline. Our team is dedicated to providing exceptional care.";

    contactHeader.appendChild(contactTag);
    contactHeader.appendChild(contactTitle);
    contactHeader.appendChild(contactDesc);
    contactSection.appendChild(contactHeader);

    // Main 2-column container
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    // LEFT COLUMN
    const contactLeftCol = document.createElement("div");
    contactLeftCol.classList.add("contact-left-col");

    // CARD 1: Information
    const infoCard = document.createElement("div");
    infoCard.classList.add("contact-card", "contact-info-card");

    const infoTitle = document.createElement("h2");
    infoTitle.classList.add("contact-card-title");
    infoTitle.textContent = "Information";
    infoCard.appendChild(infoTitle);

    const infoList = document.createElement("div");
    infoList.classList.add("contact-info-list");

    const infoItemsData = [
        {
            type: "address",
            label: "Address",
            value: "742 Evergreen Terrace, Culinary District",
            icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
        },
        {
            type: "phone",
            label: "Phone",
            value: "+1 (555) 839-2041",
            icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
        },
        {
            type: "email",
            label: "Email",
            value: "reservations@aveline.restaurant",
            icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
        },
        {
            type: "hours",
            label: "Opening Hours",
            value: "Tue–Sun: 5:00 PM – 11:00 PM",
            sub: "Monday: Closed",
            icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
        },
    ];

    infoItemsData.forEach((item) => {
        const itemEl = document.createElement("div");
        itemEl.classList.add("info-item");

        const iconContainer = document.createElement("div");
        iconContainer.classList.add("info-icon");
        iconContainer.innerHTML = item.icon;

        const contentContainer = document.createElement("div");
        contentContainer.classList.add("info-item-content");

        const label = document.createElement("span");
        label.classList.add("info-label");
        label.textContent = item.label;

        const val = document.createElement("p");
        val.classList.add("info-value");
        val.textContent = item.value;

        contentContainer.appendChild(label);
        contentContainer.appendChild(val);

        if (item.sub) {
            const sub = document.createElement("span");
            sub.classList.add("info-sub");
            sub.textContent = item.sub;
            contentContainer.appendChild(sub);
        }

        itemEl.appendChild(iconContainer);
        itemEl.appendChild(contentContainer);
        infoList.appendChild(itemEl);
    });

    infoCard.appendChild(infoList);
    contactLeftCol.appendChild(infoCard);

    // CARD 2: Send a Message
    const formCard = document.createElement("div");
    formCard.classList.add("contact-card", "contact-form-card");

    const formTitle = document.createElement("h2");
    formTitle.classList.add("contact-card-title");
    formTitle.textContent = "Send a Message";

    const formDesc = document.createElement("p");
    formDesc.classList.add("contact-form-desc");
    formDesc.textContent =
        "Fill out the form below and our concierge will get back to you promptly.";

    formCard.appendChild(formTitle);
    formCard.appendChild(formDesc);

    const form = document.createElement("form");
    form.classList.add("contact-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    // Group 1: Name
    const nameGroup = document.createElement("div");
    nameGroup.classList.add("form-group");

    const nameLabel = document.createElement("label");
    nameLabel.classList.add("form-label");
    nameLabel.textContent = "YOUR NAME";
    nameLabel.htmlFor = "contact-name";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "contact-name";
    nameInput.classList.add("form-input");
    nameInput.placeholder = "Victoria Sterling";

    nameGroup.appendChild(nameLabel);
    nameGroup.appendChild(nameInput);
    form.appendChild(nameGroup);

    // Group 2: Email
    const emailGroup = document.createElement("div");
    emailGroup.classList.add("form-group");

    const emailLabel = document.createElement("label");
    emailLabel.classList.add("form-label");
    emailLabel.textContent = "EMAIL ADDRESS";
    emailLabel.htmlFor = "contact-email";

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "contact-email";
    emailInput.classList.add("form-input");
    emailInput.placeholder = "victoria@example.com";

    emailGroup.appendChild(emailLabel);
    emailGroup.appendChild(emailInput);
    form.appendChild(emailGroup);

    // Group 3: Message
    const msgGroup = document.createElement("div");
    msgGroup.classList.add("form-group");

    const msgLabel = document.createElement("label");
    msgLabel.classList.add("form-label");
    msgLabel.textContent = "MESSAGE";
    msgLabel.htmlFor = "contact-message";

    const msgInput = document.createElement("textarea");
    msgInput.id = "contact-message";
    msgInput.classList.add("form-textarea");
    msgInput.rows = 4;
    msgInput.placeholder =
        "Inquire about private events or specific seating preferences...";

    msgGroup.appendChild(msgLabel);
    msgGroup.appendChild(msgInput);
    form.appendChild(msgGroup);

    // Submit button
    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.classList.add("contact-submit-btn");
    submitBtn.innerHTML = `Send Message <span class="submit-arrow">&rarr;</span>`;

    form.appendChild(submitBtn);
    formCard.appendChild(form);
    contactLeftCol.appendChild(formCard);

    contactContainer.appendChild(contactLeftCol);

    // RIGHT COLUMN: Atmosphere & Location
    const contactRightCol = document.createElement("div");
    contactRightCol.classList.add("contact-right-col");

    const atmosphereCard = document.createElement("div");
    atmosphereCard.classList.add("contact-card", "contact-atmosphere-card");

    const atmosphereHeader = document.createElement("div");
    atmosphereHeader.classList.add("atmosphere-header");

    const atmosphereTitle = document.createElement("h2");
    atmosphereTitle.classList.add("contact-card-title");
    atmosphereTitle.textContent = "Atmosphere & Location";

    const atmosphereBadge = document.createElement("div");
    atmosphereBadge.classList.add("atmosphere-badge");
    atmosphereBadge.innerHTML = `<span class="badge-dot">•</span> Open Tonight`;

    atmosphereHeader.appendChild(atmosphereTitle);
    atmosphereHeader.appendChild(atmosphereBadge);
    atmosphereCard.appendChild(atmosphereHeader);

    // Image Container
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("atmosphere-image-wrapper");

    const atmosphereImg = document.createElement("img");
    atmosphereImg.classList.add("atmosphere-img");
    atmosphereImg.src = experienceImage;
    atmosphereImg.alt = "Aveline Main Dining Room";

    const overlay = document.createElement("div");
    overlay.classList.add("atmosphere-overlay");

    const overlayInfo = document.createElement("div");
    overlayInfo.classList.add("overlay-info");

    const venueName = document.createElement("h3");
    venueName.classList.add("overlay-title");
    venueName.textContent = "Aveline Main Dining Room";

    const venueLocation = document.createElement("p");
    venueLocation.classList.add("overlay-subtitle");
    venueLocation.textContent = "Culinary District, City Center";

    overlayInfo.appendChild(venueName);
    overlayInfo.appendChild(venueLocation);

    const directionsBtn = document.createElement("button");
    directionsBtn.type = "button";
    directionsBtn.classList.add("directions-btn");
    directionsBtn.textContent = "Get Directions";

    overlay.appendChild(overlayInfo);
    overlay.appendChild(directionsBtn);

    imageWrapper.appendChild(atmosphereImg);
    imageWrapper.appendChild(overlay);

    atmosphereCard.appendChild(imageWrapper);

    const footnote = document.createElement("p");
    footnote.classList.add("atmosphere-footnote");
    footnote.textContent =
        "Valet parking available exclusively at the main entrance on Evergreen Terrace.";

    atmosphereCard.appendChild(footnote);

    contactRightCol.appendChild(atmosphereCard);
    contactContainer.appendChild(contactRightCol);

    contactSection.appendChild(contactContainer);
    content.appendChild(contactSection);

    // Contact Footer
    const contactFooter = document.createElement("footer");
    contactFooter.classList.add("contact-footer");

    const footerBrand = document.createElement("span");
    footerBrand.classList.add("contact-footer-brand");
    footerBrand.textContent = "Aveline";

    const footerCopyright = document.createElement("p");
    footerCopyright.classList.add("contact-footer-copyright");
    footerCopyright.textContent =
        "© 2026 Aveline Restaurant. All rights reserved.";

    const footerSocials = document.createElement("div");
    footerSocials.classList.add("contact-footer-socials");

    const socials = ["Instagram", "Facebook", "TripAdvisor"];
    socials.forEach((name) => {
        const link = document.createElement("a");
        link.href = "#";
        link.textContent = name;
        footerSocials.appendChild(link);
    });

    contactFooter.appendChild(footerBrand);
    contactFooter.appendChild(footerCopyright);
    contactFooter.appendChild(footerSocials);

    content.appendChild(contactFooter);
}
