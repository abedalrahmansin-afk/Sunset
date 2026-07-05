const trip = {
  title: 'Costa Brava Escape',
  dates: '11–14 July',
  place: 'Tossa de Mar, Spain',
  hotel: "L'Illa Hotel — Carrer Nou 35",
  budget: { planned: 1500, spent: 0 },
}

const itinerary = [
  ['Day 1', 'Arrival, hotel check-in, Platja Gran swim, Vila Vella sunset, romantic dinner.'],
  ['Day 2', 'Slow breakfast, beach morning, kayak + snorkeling, cocktails by the sea.'],
  ['Day 3', 'Hidden coves: Cala Pola, Cala Giverola, Cala Llevadó, sunset walk.'],
  ['Day 4', 'Final swim, souvenirs, lunch, transfer back to Barcelona Airport.']
]

const beaches = [
  ['Platja Gran', 'Easy first swim', '2 min walk'],
  ['Cala Pola', 'Romantic cove', 'Taxi / hike'],
  ['Cala Giverola', 'Best swimming', 'Taxi / boat'],
  ['Cala Llevadó', 'Quieter escape', 'Taxi']
]

const restaurants = [
  ['Can Sophia', 'Romantic dinner', 'Reserve if possible'],
  ['Tapas del Mar', 'Sea-view tapas', 'Great casual night'],
  ['La Cuina de Can Simón', 'Special occasion', 'Fine dining'],
  ['Beach cafés', 'Breakfast', 'Keep mornings easy']
]

const packing = ['Passport', 'Flight confirmation', 'Hotel confirmation', 'Swimwear', 'Sunscreen', 'Sunglasses', 'EU adapter', 'Power bank', 'Dinner outfit']

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="pill">🌅 Sunset</div>
        <h1>{trip.title}</h1>
        <p>{trip.dates} · {trip.place}</p>
        <div className="heroGrid">
          <div><span>Hotel</span><strong>{trip.hotel}</strong></div>
          <div><span>Vibe</span><strong>Beach · Romance · Relax</strong></div>
          <div><span>Budget</span><strong>€{trip.budget.planned}</strong></div>
        </div>
      </section>

      <section className="quick">
        <a href="https://maps.google.com/?q=L'Illa+Hotel+Carrer+Nou+35+Tossa+de+Mar" target="_blank">🏨 Hotel Map</a>
        <a href="https://maps.google.com/?q=Platja+Gran+Tossa+de+Mar" target="_blank">🏖️ Main Beach</a>
        <a href="https://maps.google.com/?q=Vila+Vella+Tossa+de+Mar" target="_blank">🌅 Sunset Spot</a>
      </section>

      <Section title="📅 Itinerary">
        {itinerary.map(([day, text]) => <Card key={day} title={day} text={text} />)}
      </Section>

      <Section title="🏖️ Beaches">
        {beaches.map(([name, tag, note]) => <Card key={name} title={name} text={`${tag} · ${note}`} />)}
      </Section>

      <Section title="🍽️ Restaurants">
        {restaurants.map(([name, tag, note]) => <Card key={name} title={name} text={`${tag} · ${note}`} />)}
      </Section>

      <Section title="💶 Budget Snapshot">
        <div className="budget"><div><span>Planned</span><b>€{trip.budget.planned}</b></div><div><span>Spent</span><b>€{trip.budget.spent}</b></div><div><span>Remaining</span><b>€{trip.budget.planned - trip.budget.spent}</b></div></div>
      </Section>

      <Section title="🎒 Packing">
        <div className="checks">{packing.map(item => <label key={item}><input type="checkbox" /> {item}</label>)}</div>
      </Section>

      <Section title="❤️ Moments Worth Not Missing">
        <Card title="Vila Vella Sunset" text="Go before dinner and walk the old walls slowly." />
        <Card title="First Morning Swim" text="Wake up early and enjoy Platja Gran before the crowds." />
        <Card title="Hidden Cove Day" text="Make Day 3 the most relaxed and romantic beach day." />
      </Section>
    </main>
  )
}

function Section({ title, children }) {
  return <section className="section"><h2>{title}</h2><div className="grid">{children}</div></section>
}
function Card({ title, text }) {
  return <article className="card"><h3>{title}</h3><p>{text}</p></article>
}
