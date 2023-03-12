
const map = L.map('map').setView([52.522104, 13.409609], 12);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> KONZERTGANGER.IN'
	}).addTo(map);

	const mGreen = L.marker([52.514683 , 13.239512],).bindPopup('Open Air Konzerte in der Waldbühne "Glockenturmstraße 1  14053 Berlin"').addTo(map).openPopup();
	const mRed = L.marker([52.512799, 13.230021], ).bindPopup('Open Air Konzerte in der Kindl-Bühne-Wuhlheide').addTo(map);
	const mOrange = L.marker([52.461980, 13.547240]).bindPopup('Open Air Konzerte im Olympiastadion').addTo(map);
  const mBlue = L.marker([52.514359, 13.392137] ).bindPopup('Classic Open Air am Gendarmenmarkt').addTo(map);
  const mYelow = L.marker([52.501237, 13.274304] ).bindPopup('IFA-Sommergarten der Messe Berlin').addTo(map);
  const mPurple = L.marker([52.517169, 13.348302], ).bindPopup('Konzertsommer im Teehaus').addTo(map);
  const mPink = L.marker([52.538248, 13.231826], ).bindPopup('Rummelsburg Open Air Festivals').addTo(map);
  const mBrown = L.marker([52.519548, 13.405849], ).bindPopup('Open Air Konzerte in der Zitadelle Spandau').addTo(map);
  const mBlack = L.marker([52.458590, 13.305240], ).bindPopup('Botanische Nacht im Botanischen Garten Dahlem').addTo(map);
  const mWhite = L.marker([52.518768, 13.364871], ).bindPopup('Wassermusik-Festival im Haus der Kulturen der Welt').addTo(map);

  const mapss = L.map('maps').setView([52.522104, 13.409609], 12);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> KONZERTGANGER.IN'
	}).addTo(map);

	var mAps = L.marker([52.514683 , 13.239512],).bindPopup('Open Air Konzerte in der Waldbühne').addTo(map).openPopup();