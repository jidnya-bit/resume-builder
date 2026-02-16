function updatePreview() {
  document.getElementById("outName").innerText = document.getElementById("name").value;
  document.getElementById("outEmail").innerText = "Email: " + document.getElementById("email").value;
  document.getElementById("outPhone").innerText = "Phone: " + document.getElementById("phone").value;
  document.getElementById("outAddress").innerText = "Address: " + document.getElementById("address").value;

  document.getElementById("outSummary").innerText = document.getElementById("summary").value;
  document.getElementById("outSkills").innerText = document.getElementById("skills").value;
  document.getElementById("outEducation").innerText = document.getElementById("education").value;
  document.getElementById("outExperience").innerText = document.getElementById("experience").value;
  document.getElementById("outProjects").innerText = document.getElementById("projects").value;
  document.getElementById("outCertificates").innerText = document.getElementById("certificates").value;
  document.getElementById("outAchievements").innerText = document.getElementById("achievements").value;
  document.getElementById("outLanguages").innerText = document.getElementById("languages").value;
}

// PHOTO PREVIEW
document.getElementById("photo").addEventListener("change", function(event) {
  const file = event.target.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = function(e){
      const img = document.getElementById("outPhoto");
      img.src = e.target.result;
      img.style.display = "block";
    }
    reader.readAsDataURL(file);
  }
});


// DOWNLOAD RESUME PDF
async function downloadResume() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let y = 10;

  doc.setFontSize(18);
  doc.text(document.getElementById("name").value, 10, y);
  y += 10;

  doc.setFontSize(12);
  doc.text("Email: " + document.getElementById("email").value, 10, y);
  y += 7;
  doc.text("Phone: " + document.getElementById("phone").value, 10, y);
  y += 7;
  doc.text("Address: " + document.getElementById("address").value, 10, y);
  y += 12;

  doc.setFontSize(14);
  doc.text("Professional Summary:", 10, y);
  y += 7;
  doc.setFontSize(11);
  doc.text(document.getElementById("summary").value, 10, y);
  y += 15;

  doc.setFontSize(14);
  doc.text("Skills:", 10, y);
  y += 7;
  doc.setFontSize(11);
  doc.text(document.getElementById("skills").value, 10, y);
  y += 15;

  doc.setFontSize(14);
  doc.text("Education:", 10, y);
  y += 7;
  doc.setFontSize(11);
  doc.text(document.getElementById("education").value, 10, y);
  y += 15;

  doc.setFontSize(14);
  doc.text("Experience:", 10, y);
  y += 7;
  doc.setFontSize(11);
  doc.text(document.getElementById("experience").value, 10, y);
  y += 15;

  doc.setFontSize(14);
  doc.text("Projects:", 10, y);
  y += 7;
  doc.setFontSize(11);
  doc.text(document.getElementById("projects").value, 10, y);

  doc.save("Resume.pdf");
}


// DOWNLOAD CV PDF (More detailed)
async function downloadCV() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let y = 10;

  doc.setFontSize(18);
  doc.text(document.getElementById("name").value + " (CV)", 10, y);
  y += 10;

  doc.setFontSize(12);
  doc.text("Email: " + document.getElementById("email").value, 10, y);
  y += 7;
  doc.text("Phone: " + document.getElementById("phone").value, 10, y);
  y += 7;
  doc.text("Address: " + document.getElementById("address").value, 10, y);
  y += 12;

  doc.setFontSize(14);
  doc.text("Professional Summary:", 10, y);
  y += 7;
  doc.setFontSize(11);
  doc.text(document.getElementById("summary").value, 10, y);
  y += 15;

  doc.setFontSize(14);
  doc.text("Education:", 10, y);
  y += 7;
  doc.setFontSize(11);
  doc.text(document.getElementById("education").value, 10, y);
  y += 15;

  doc.setFontSize(14);
  doc.text("Experience:", 10, y);
  y += 7;
  doc.setFontSize(11);
  doc.text(document.getElementById("experience").value, 10, y);
  y += 15;

  doc.setFontSize(14);
  doc.text("Projects:", 10, y);
  y += 7;
  doc.setFontSize(11);
  doc.text(document.getElementById("projects").value, 10, y);
  y += 15;

  doc.setFontSize(14);
  doc.text("Certificates:", 10, y);
  y += 7;
  doc.setFontSize(11);
  doc.text(document.getElementById("certificates").value, 10, y);
  y += 15;

  doc.setFontSize(14);
  doc.text("Achievements:", 10, y);
  y += 7;
  doc.setFontSize(11);
  doc.text(document.getElementById("achievements").value, 10, y);
  y += 15;

  doc.setFontSize(14);
  doc.text("Languages:", 10, y);
  y += 7;
  doc.setFontSize(11);
  doc.text(document.getElementById("languages").value, 10, y);

  doc.save("CV.pdf");
}
