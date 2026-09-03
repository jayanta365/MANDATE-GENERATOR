/* =========================================================
   NACH MANDATE GENERATOR - PASSWORD PROTECTION
   ========================================================= */

const APP_PASSWORD = "NACH@2026";

(function () {

    function addStyles() {

        if (document.getElementById("nach-password-style")) return;

        const style = document.createElement("style");

        style.id = "nach-password-style";

        style.textContent = `
            #nachPasswordOverlay {
                position: fixed;
                inset: 0;
                z-index: 100000;
                background: #f3f6fa;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            }

            .nachPasswordBox {
                width: 100%;
                max-width: 380px;
                background: #ffffff;
                border-radius: 16px;
                padding: 28px 24px;
                box-shadow: 0 10px 35px rgba(0,0,0,.15);
                text-align: center;
            }

            .nachPasswordBox h2 {
                margin: 0 0 8px;
                color: #1f2937;
                font-size: 22px;
            }

            .nachPasswordBox p {
                margin: 0 0 20px;
                color: #6b7280;
                font-size: 13px;
            }

            #nachPasswordInput {
                width: 100%;
                padding: 13px;
                border: 1px solid #d1d5db;
                border-radius: 9px;
                font-size: 16px;
                outline: none;
                text-align: center;
            }

            #nachPasswordInput:focus {
                border-color: #2563eb;
                box-shadow: 0 0 0 3px rgba(37,99,235,.12);
            }

            #nachPasswordButton {
                width: 100%;
                margin-top: 12px;
                padding: 13px;
                border: 0;
                border-radius: 9px;
                background: #2563eb;
                color: #ffffff;
                font-size: 15px;
                font-weight: 700;
                cursor: pointer;
            }

            #nachPasswordError {
                min-height: 18px;
                margin-top: 10px;
                color: #b91c1c;
                font-size: 13px;
            }
        `;

        document.head.appendChild(style);
    }


    function lockApp() {

        addStyles();

        const overlay = document.createElement("div");

        overlay.id = "nachPasswordOverlay";

        overlay.innerHTML = `
            <div class="nachPasswordBox">

                <h2>NACH Mandate Generator</h2>

                <p>
                    Enter the password to continue
                </p>

                <input
                    id="nachPasswordInput"
                    type="password"
                    placeholder="Enter password"
                    autocomplete="current-password"
                >

                <button
                    id="nachPasswordButton"
                    type="button"
                >
                    Unlock
                </button>

                <div id="nachPasswordError"></div>

            </div>
        `;

        document.body.appendChild(overlay);


        const input =
            document.getElementById("nachPasswordInput");

        const button =
            document.getElementById("nachPasswordButton");

        const error =
            document.getElementById("nachPasswordError");


        function unlock() {

            if (input.value === APP_PASSWORD) {

                overlay.remove();

            } else {

                error.textContent =
                    "Incorrect password. Please try again.";

                input.value = "";

                input.focus();
            }
        }


        button.addEventListener("click", unlock);


        input.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                unlock();

            }

        });


        setTimeout(function () {

            input.focus();

        }, 100);

    }


    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            lockApp
        );

    } else {

        lockApp();

    }

})();
