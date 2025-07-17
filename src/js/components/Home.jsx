import React from "react";
import { useState, useEffect } from "react";


const Home = () => {

	const [luz, setLuz] = useState("")

	function luzOn(e) {
		const color = e.target.id;
		setLuz(color);
	}

	useEffect(() => {
		const colores = ["rojo", "ambar", "verde"];
		colores.forEach((color) => {
			const elem = document.getElementById(color);
			if (elem) {
				if (color === luz) {
					elem.classList.add("encendida");
				} else {
					elem.classList.remove("encendida");
				}
			}
		});
	}, [luz]);

	return (
		<div className="justify-content-center">
			<div className="poste m-auto"></div>
			<div className="semaforo justify-content-center m-auto">
				<div id="rojo" className="m-auto" onClick={luzOn}></div>
				<div id="ambar" className="m-auto" onClick={luzOn}></div>
				<div id="verde" className="m-auto" onClick={luzOn}></div>
			</div>
		</div>
	);
};

export default Home;