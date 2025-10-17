async function cariAngka() {
      for (let i = 1; i <= 100; i++) { 
        let res = await fetch(`http://localhost:8080/guess?guess=${i}`);
        let data = await res.json();

        console.log("Coba: ", i, "=>", data);

        if (data.result === "correct") {
          document.getElementById("hasil").innerText =
            ` Angka ditemukan: ${i} dalam ${data.guess_count} percobaan`;
          break; 
        }
      }
    }