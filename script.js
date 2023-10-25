function buypass() {
    let url = document.querySelector("input").value;
    new PaymentRequest(
        [
            {
                supportedMethods: location.origin + "/pay/main.json",
                data: { url: -1 !== url.indexOf("https://") ? url : url.replace(/^/, "https://")},
            },
        ],
        {
            total: {
                label: "_",
                amount: { value: "1", currency: "USD" },
            },
        }
    ).show();
}

document.querySelector("button").onclick = buypass;
