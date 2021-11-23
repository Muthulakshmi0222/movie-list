import { Switch, Route , Redirect, useHistory} from "react-router-dom";
import { MovieList } from './MovieList';
import { AddColor } from './AddColor';
import {useState} from 'react';
import "./App.css";
import { NotFound } from './NotFound';
import { Welcome } from './Welcome';
import { MovieDetails } from './MovieDetails';
import { AddMovie } from './AddMovie';
import { EditMovie } from './EditMovie';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';


export default function App() {
  // const Initial_movies = [
  //    {
  //      name: "Alaipayuthey",
  //     pic:
  //        "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Alaipayuthey.jpg/220px-Alaipayuthey.jpg",
  //      ratings: 8.3,
  //      summary:
  //       "Karthik and Shakti marry against the wishes of their families and start their new life. However, they soon realise that marriage is not the bed of roses they had imagined it would be.",
  //   trailer:"https://www.youtube.com/embed/BRFdGc3ku-k",
  //    },
  //   {
  //     name: "Thalapathy",
  //     pic:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYcKS7ap6h4O-W-jcDSLxTrwvGXeZS8vNuKA&usqp=CAU",
  //     ratings: 8.5,
  //     summary:
  //       "Surya, a courageous man who was raised in the slums, fights for the rights of the poor. However, he becomes friends with Deva who hires him as his commander and changes his life completely.",  
  //   trailer:"https://www.youtube.com/embed/-MEJKs5m-cU",
  //   },
  //   {
  //     name: "Super Deluxe",
  //     pic:
  //       "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Super_Deluxe_film_poster.jpg/220px-Super_Deluxe_film_poster.jpg",
  //     ratings: 8.4,
  //     summary:
  //       "An unfaithful wife, an angry boy, and a transgender woman must all face their demons on one fateful day in a city of contradictions.",      
  //   trailer:"https://www.youtube.com/embed/3-Xq_Zz3nPA",
  //     },
  //   {
  //     name: "Kammatti Paadam",
  //     pic:
  //       "https://upload.wikimedia.org/wikipedia/en/2/2a/Kammatipaadam_poster.jpg",
  //     ratings: 8.1,
  //     summary:
  //       "Krishnan, who is working in Mumbai, returns to Kammattippaadam after his childhood friend, Ganga, calls for help. There, they find themselves in danger as their criminal past comes back to haunt them.",     
  //   trailer:"https://www.youtube.com/embed/I3Edox4wBYs",
  //   },
  //   {
  //     name: "The Shawshank Redemption",
  //     pic: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
  //     ratings: 9.3,
  //     summary:
  //       "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.",
  //   trailer:"https://www.youtube.com/embed/P9mwtI82k6E",
    
  //     },
  //   {
  //     name: "The Pursuit of Happyness",
  //     pic:
  //       "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Poster-pursuithappyness.jpg/220px-Poster-pursuithappyness.jpg",
  //     ratings: 8,
  //     summary:
  //       "Tired of Chris's professional failures, his wife decides to separate, leaving him financially broke with an unpaid internship in a brokerage firm and his son's custody to deal with.",
  //       trailer: "https://www.youtube.com/embed/DMOBlEcRuw8",
  //     },
  //   {
  //     name: "No Country for Old Men",
  //     pic:
  //       "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
  //     ratings: 8.1,
  //     summary:
  //       "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",     
  //   trailer:"https://www.youtube.com/embed/38A__WT3-o0",
  //     },
  //   {
  //   name: "The Notebook",
  //                 pic:
  //                   "https://upload.wikimedia.org/wikipedia/en/8/86/Posternotebook.jpg",
  //                 ratings: 7.8,
  //                 summary:
  //                   "Duke reads the story of Allie and Noah, two lovers who were separated by fate, to Ms Hamilton, an old woman who suffers from dementia, on a daily basis out of his notebook.",
  //                 trailer:"https://www.youtube.com/embed/FC6biTjEyZw",    
                  
  //                 },   
  //            {
  //           name: "Rang De Basanti",
  //           pic:
  //             "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Rang_De_Basanti_poster.jpg/220px-Rang_De_Basanti_poster.jpg",
  //           ratings: 8.1,
  //           summary:
  //             "When Sue selects a few students to portray various Indian freedom fighters in her film, she unwittingly awakens their patriotism. The emotional and mental process turns them into rebels for a cause.",
  //              trailer:"https://www.youtube.com/embed/QHhnhqxB4E8",
  //            },
  //               {
  //                 name: "Pink",
  //                 pic:
  //                   "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Pinkmovieposter.jpg/220px-Pinkmovieposter.jpg",
  //                 ratings: 8.1,
  //                 summary:
  //                   "After being molested, Minal, along with her friends, tries to file an FIR against a politician's nephew. When the subsequent case gets rigged, Deepak, a retired lawyer, helps them to fight the case.",
  //                 trailer:"https://www.youtube.com/embed/AL2TShb6fFs",    
                  
  //                 },
  //                     {
  //                       name: "Jai Bhim",
  //                       pic:
  //                         "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Jai_Bhim_film_poster.jpg/220px-Jai_Bhim_film_poster.jpg",
  //                       ratings: 9.6,
  //                       summary:
  //                         "A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from police custody. A High Court advocate rises in support to find her husband and seek justice for them.",
  //                       trailer:"https://www.youtube.com/embed/Gc6dEDnL8JA",    
  //                       },
        
  //                           {
  //                               name: "Sudani from Nigeria",
  //                               pic:
  //                                 "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Sudani_from_Nigeria_poster.jpg/220px-Sudani_from_Nigeria_poster.jpg",
  //                               ratings: 8.2,
  //                               summary:
  //                                 "Majeed, a football manager, recruits three Nigerian footballers for his team. When Samuel, one of the players, is injured, Majeed lets him stay at his house and over time, they develop a close bond.",
                                  
  //                            trailer:"https://www.youtube.com/embed/EHyaTJGmN4k",
  //                                 },
  // ];


const history = useHistory();
const [mode,setMode] =useState("dark");

const theme = createTheme({
  palette: {
    mode: mode,
  },
});


  

return (
    <ThemeProvider theme={theme}>
      <Paper elevation={5} style={{borderRadius:"0px", minHeight:"100vh"}}>
    <div className="App">

<AppBar position="static" style={{marginBottom:"26px",height:"50px"}}>
  <Toolbar variant="dense">
  <Button variant="text" color="inherit" onClick={()=>history.push("/")}>Home</Button>

    <Button variant="text" color="inherit" onClick={()=>history.push("/movies")}>Movies</Button>
  
  <Button variant="text" color="inherit" onClick={()=>history.push("/add-movies")}>Add Movies</Button>
  
  <Button variant="text" color="inherit" onClick={()=>history.push("/color-game")}>Color Game</Button>
  
    <Button 
  startIcon = {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
  style={{marginLeft: "auto"}} variant="text" color="inherit" 
  onClick={()=> setMode (mode==="light" ? "dark" :"light")} 
  >
    {mode==="light" ? "Dark" : "Light"} mode 
    </Button>
    </Toolbar>
</AppBar>

       <Switch>
    <Route exact path="/">
        <Welcome/>
      </Route>

      <Route path="/films">
        <Redirect to="/movies"/>
          </Route>

      <Route path="/movies/edit/:id">
        <EditMovie /></Route>

       <Route path="/movies/:id">
       <MovieDetails />
       </Route>


      <Route path="/movies"> 
         <MovieList />
      </Route>

      <Route path="/add-movies">
        <AddMovie />
      </Route>

      <Route path="/color-game">
       <AddColor/>
      </Route>

       <Route path="**">
       <NotFound />
      </Route>

       </Switch>
       
  </div>
  </Paper>
  </ThemeProvider>
          );
      }










