import type { IncomingMessage, ServerResponse } from 'http'

export default async (req: IncomingMessage, res: ServerResponse) => {
  
  const movies = [
        {
            "name": "Alien",
            "year": 1979,
            "runtime": 116,
            "categories": [
                "horror",
                "sci-fi"
            ],
            "release-date": "1979-05-25",
            "director": "Ridley Scott",
            "writer": [
                "Dan O'Bannon",
                "Ronald Shusett"
            ],
            "actors": [
                "Tom Skerritt",
                "Sigourney Weaver",
                "Veronica Cartwright",
                "Harry Dean Stanton",
                "John Hurt",
                "Ian Holm",
                "Yaphet Kotto",
                "Bolaji Badejo",
                "Helen Horton"
            ],
            "storyline": "After a space merchant vessel perceives an unknown transmission as a distress call, its landing on the source moon finds one of the crew attacked by a mysterious lifeform, and they soon realize that its life cycle has merely begun."
        },
        {
            "name": "Life of Brian",
            "year": 1979,
            "runtime": 94,
            "categories": [
                "comedy"
            ],
            "release-date": "1979-11-08",
            "director": "Terry Jones",
            "writer": [
                "Graham Chapman",
                "John Cleese",
                "Eric Idle",
                "Terry Gilliam",
                "Terry Jones",
                "Michael Palin"
            ],
            "actors": [
                "Graham Chapman",
                "John Cleese",
                "Michael Palin"
            ],
            "storyline": "Born on the original Christmas in the stable next door to Jesus, Brian of Nazareth spends his life being mistaken for a messiah."
        },
        {
            "name": "Mad Max",
            "year": 1979,
            "runtime": 93,
            "categories": [
                "action",
                "dystopian"
            ],
            "release-date": "1979-04-12",
            "director": "George Miller",
            "writer": [
                "George Miller",
                "James McCausland"
            ],
            "actors": [
                "Mel Gibson",
                "Joanne Samuel",
                "Hugh Keays-Byrne",
                "Steve Bisley",
                "Tim Burns",
                "Roger Ward"
            ],
            "storyline": "The film presents a tale of societal collapse, murder, and vengeance set in a future Australia, in which a vengeful policeman becomes embroiled in a feud with a vicious motorcycle gang."
        },
        {
            "name": "Star Wars: Episode V - The Empire Strikes Back",
            "year": 1980,
            "runtime": 124,
            "categories": [
                "action",
                "adventure",
                "sci-fi"
            ],
            "release-date": "1980-06-20",
            "director": "George Lucas",
            "writer": "George Lucas",
            "actors": [
                "Mark Hamill",
                "Harrison Ford",
                "Carrie Fisher",
                "Alec Guinness"
            ]
        },
        {
            "name": "Indiana Jones: Raiders of the Lost Ark",
            "year": 1981,
            "runtime": 115,
            "categories": [
                "action",
                "adventure"
            ],
            "release-date": "1981-06-12",
            "director": "Steven Spielberg",
            "writer": [
                "Lawrence Kasdan",
                "George Lucas"
            ],
            "actors": [
                "Harrison Ford",
                "Karen Allen",
                "Paul Freeman"
            ]
        },
        {
            "name": "Mad Max 2: The Road Warrior",
            "year": 1981,
            "runtime": 96,
            "categories": [
                "action",
                "dystopian"
            ],
            "release-date": "1981-12-24",
            "director": "George Miller",
            "writer": [
                "George Miller",
                "Brian Hannant",
                "Terry Hayes"
            ],
            "actors": [
                "Mel Gibson"
            ],
            "storyline": "The film follows a Western frontier tale of a community of settlers moved to defend themselves against a roving band of marauders, with Max as a hardened man who rediscovers his humanity when he decides to help the settlers."
        },
        {
            "name": "Superman II",
            "year": 1981,
            "runtime": 127,
            "categories": [
                "action",
                "adventure",
                "sci-fi"
            ],
            "release-date": "1981-06-19",
            "director": " Richard Lester",
            "writer": [
                "Joe Shuster",
                "Jerry Siegel"
            ],
            "actors": [
                "Gene Hackman",
                "Christopher Reeve",
                "Margot Kidder"
            ],
            "storyline": "Superman agrees to sacrifice his powers to start a relationship with Lois Lane, unaware that three Kryptonian criminals he inadvertently released are conquering Earth."
        },
        {
            "name": "Blade Runner",
            "year": 1982,
            "runtime": 117,
            "categories": [
                "sci-fi",
                "thriller"
            ],
            "release-date": "1982-09-09",
            "director": " Ridley Scott",
            "writer": [
                "Hampton Fancher",
                "David Peoples",
                "Philip K. Dick"
            ],
            "actors": [
                "Harrison Ford",
                "Sean Young",
                "Roy Batty"
            ],
            "storyline": "A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator."
        },
        {
            "name": "Star Wars: Episode VI - Return of the Jedi",
            "year": 1983,
            "runtime": 131,
            "categories": [
                "action",
                "adventure",
                "sci-fi"
            ],
            "release-date": "1983-05-25",
            "director": "Richard Marquand",
            "writer": [
                "Lawrence Kasdan",
                "George Lucas"
            ],
            "actors": [
                "Mark Hamill",
                "Harrison Ford",
                "Carrie Fisher"
            ]
        },
        {
            "name": "The Terminator",
            "year": 1984,
            "runtime": 107,
            "categories": [
                "action",
                "sci-fi"
            ],
            "description": "A human-looking indestructible cyborg is sent from 2029 to 1984 to assassinate a waitress, whose unborn son will lead humanity in a war against the machines, while a soldier from that war is sent to protect her at all costs.",
            "release-date": "1984-10-26",
            "director": "James Cameron",
            "writer": [
                "James Cameron",
                "Gale Anne Hurd",
                "William Wisher Jr."
            ],
            "actors": [
                "Arnold Schwarzenegger",
                "Michael Biehn",
                "Linda Hamilton",
                "Paul Winfield",
                "Lance Henriksen",
                "Rick Rossovich",
                "Bess Motta",
                "Earl Boen"
            ]
        }
    ]
    return movies.map((m, i)=> ({...m, id: i + 1}))
  }