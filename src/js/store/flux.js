const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			starships: [],
			species: [],
			detailpeople: [],
		},
		actions: {
				
				getPeople: () => {
					fetch('https://www.swapi.tech/api/people/')
					.then(resp =>resp.json())
					.then(respJson => {
						const response = respJson.results;
						setStore ({ people: response });
					})
				},


				getStarShips: () => {
					fetch('https://www.swapi.tech/api/starships/')
					.then(resp =>resp.json())
					.then(respJson => {
						const response = respJson.results;
						setStore ({ starships: response });
					})
				},

				getSpecies: () => {
					fetch('https://www.swapi.tech/api/species/')
					.then(resp =>resp.json())
					.then(respJson => {
						const response = respJson.results;
						setStore ({ species: response });
					})
				},

				getDetailPeople: () => {
					fetch(`https://www.swapi.tech/api/people/${uid}`)
					.then(resp =>resp.json())
					.then(respJson => {
						const response = respJson.results;
						setStore ({ detailpeople: response });
					})
				},



			
		}
		}
	};


export default getState;
