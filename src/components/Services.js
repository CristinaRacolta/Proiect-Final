import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICII</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Clasic" img="card1.png" text="Lasa-ti gusturile sa fie rasfatate de aromele desavarsite ale celor mai rafinate praline! Poti alege din varietatea de cutii elegante cu praline." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Cadou" img="card2.png" text="Descopera cel mai original mod de a transpune sentimentele tale intr-un cadou pe gustul fiecaruia." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Evenimente" img="card3.png" text="Suntem alaturi de tine la orice eveniment important din viata ta. Organizam ateliere creative si participam la diverse expozitii." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
