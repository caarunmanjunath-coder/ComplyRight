function generateCompliance() {

    let entity = document.getElementById("entity").value;
    let turnover = parseInt(document.getElementById("turnover").value || 0);
    let employees = parseInt(document.getElementById("employees").value || 0);
    let gst = document.getElementById("gst").value;

    let compliances = [];

    // Income Tax
    compliances.push("Income Tax Return – Annual");

    if (turnover > 10000000) {
        compliances.push("Tax Audit u/s 44AB – Mandatory");
    }

    compliances.push("TDS Return – Quarterly");

    // GST
    if (gst === "Yes") {
        compliances.push("GSTR-3B – Monthly");
        compliances.push("GSTR-1 – Monthly/Quarterly");
        compliances.push("GSTR-9 – Annual");
    }

    // Labour
    if (employees >= 20) {
        compliances.push("EPF Return – Monthly");
    }

    if (employees >= 10) {
        compliances.push("ESI Return – Monthly");
    }

    if (employees > 0) {
        compliances.push("Professional Tax – Monthly");
    }

    // MCA
    if (entity === "LLP") {
        compliances.push("LLP Form 11 – Annual");
        compliances.push("LLP Form 8 – Annual");
    }

    if (entity === "Private Limited Company" || entity === "Public Limited Company") {
        compliances.push("AOC-4 – Financial Filing");
        compliances.push("MGT-7 – Annual Return");
        compliances.push("DIR-3 KYC – Director KYC");
    }

    // Municipal
    compliances.push("Trade License Renewal – Annual");
    compliances.push("Property Tax – Half-Yearly");

    let html = "<h3>Applicable Compliances</h3><ul>";

    compliances.forEach(item => {
        html += "<li>" + item + "</li>";
    });

    html += "</ul>";

    document.getElementById("output").innerHTML = html;
}