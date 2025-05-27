<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Community Portal</title>
    <style>

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #6a11cb, #2575fc);
            color: #fff;
            margin: 0; padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            overflow: hidden;
        }

        h1 {
            font-size: 3.5rem;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.5);
            margin-bottom: 20px;
        }

        #welcome-msg {
            font-size: 1.8rem;
            font-weight: 600;
            background: rgba(255,255,255,0.15);
            padding: 15px 30px;
            border-radius: 12px;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
            animation: pulse 3s infinite;
            max-width: 80vw;
            text-align: center;
        }

        
        @keyframes pulse {
            0%, 100% {
                box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
            }
            50% {
                box-shadow: 0 0 25px rgba(255, 255, 255, 0.9);
            }
        }

      
        #custom-alert {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            background: #fff;
            color: #333;
            padding: 25px 40px;
            border-radius: 14px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.4);
            font-weight: 700;
            font-size: 1.4rem;
            text-align: center;
            z-index: 9999;
            transition: transform 0.3s ease-in-out;
        }

        #custom-alert.show {
            transform: translate(-50%, -50%) scale(1);
        }

        #custom-alert button {
            margin-top: 15px;
            padding: 8px 20px;
            border: none;
            border-radius: 8px;
            background: #2575fc;
            color: #fff;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        #custom-alert button:hover {
            background: #6a11cb;
        }
    </style>
</head>
<body>
    <h1>Community Portal</h1>
    <div id="welcome-msg"></div>

    <div id="custom-alert" role="alert" aria-live="assertive">
        Page is fully loaded!
        <br />
        <button id="close-alert">Got it!</button>
    </div>

    <script>
        console.log("Welcome to the Community Portal");

        function getGreeting() {
            const hour = new Date().getHours();
            if (hour < 12) return "Good Morning!";
            if (hour < 18) return "Good Afternoon!";
            return "Good Evening!";
        }

        function typeWriter(element, text, delay = 80) {
            let i = 0;
            element.textContent = "";
            function type() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, delay);
                }
            }
            type();
        }

        window.onload = function() {
            const welcomeMsg = document.getElementById('welcome-msg');
            const greetingText = `${getGreeting()} Welcome to the Community Portal!`;
            typeWriter(welcomeMsg, greetingText);
            const alertBox = document.getElementById('custom-alert');
            alertBox.classList.add('show');
            document.getElementById('close-alert').addEventListener('click', () => {
                alertBox.classList.remove('show');
            });
        };
    </script>
</body>
</html>
