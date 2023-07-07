import './home.css'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { BsFillStarFill } from "react-icons/bs";
import InputGroup from 'react-bootstrap/InputGroup';
import { useContext,useEffect} from 'react';
import { myContext } from './Context';
import { Link } from 'react-router-dom';
const Movies = () => {

    
    
    const {search,setSearch,ApiData,SetApiData} =useContext(myContext)
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  
    const url='https://api.themoviedb.org/3/movie/popular?api_key=242efbc4712f4c03c1e8c51afa2afe05&language=en-US&page=300';
  const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=242efbc4712f4c03c1e8c51afa2afe05&query=";

const getAllMovies = async () => {
    try {
      const response = await axios.get(url);

      console.log(response.data.results);

      SetApiData(response.data.results);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getSearchedMovies = async () => {
    try {
      const response = await axios.get(SEARCHAPI + search);
      SetApiData(response.data.results);
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log(ApiData);
  console.log(getSearchedMovies);

  useEffect(() => {
    if (search === "") {
      getAllMovies();
    } else {
      getSearchedMovies();
    }
  }, [search]);
  return (
   
    <div>
      <h1 style={{textShadow:"2px 6px 8px  rgb(1, 147, 147) ",color:'#00d2d3'}}>Movie App</h1>
          <div >
{/* inputsection */}
<div >
<InputGroup style={{width:"50%",margin:"20px auto"}} >
<Form.Control
onChange={(e) => setSearch(e.target.value)}
placeholder="Search"
aria-label="Search"
aria-describedby="basic-addon1"
className="inputwala"
value={search}

/>
</InputGroup>
</div> 

{/* cardsection */}

<div className="cardwala">


{
   ApiData.map((e)=>(
    <><div  className="maincard">
         <Link style={{color:"black",textDecoration:"none"}} to={`/MoviedetailPage/${e.id}`} >
        <Card key={e.id} className='card mycard' style={{border:"none" ,backgroundColor:"#232425"  }}>
      <Card.Img variant="top" width={250} height={300} style={{borderRadius:"10px"}} src={IMGPATH + e.poster_path} />
      <Card.Body style={{backgroundColor: '#232425'}}>
        <Card.Title style={{color:"white"}}>{e.original_title}</Card.Title>
        
        <div className="part"><BsFillStarFill  className='rating'/>&nbsp;&nbsp;&nbsp;&nbsp;
        <Card.Text style={{fontSize:"20px",color:"white"}}>{e.vote_average}</Card.Text>  </div> 
      </Card.Body>
    </Card>  
    </Link>
        </div>
        </>
    ))
}
</div>
</div>
    </div>
  )
}

export default Movies