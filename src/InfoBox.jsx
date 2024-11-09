import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";


export default function InfoBox ({info}) {
    const INIT_url="https://media.istockphoto.com/id/1748931950/photo/traditional-maldivian-dhoni-boat-passes-by-on-the-turquoise-blue-sea-horizon-on-a-stormy-day.webp?b=1&s=170667a&w=0&k=20&c=9QIh2N3jqPMBVc8bBQHNCviPcox66fAFunicNycTqug="

const HOT_URl ="https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?b=1&s=170667a&w=0&k=20&c=3pJ8IywW-9H-bcZ2XNGG0EaKwYiWD3XdMLC-mAC6dFI=";
const COLD_URL="https://images.unsplash.com/photo-1687904368738-ca6423635666?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D";
const RAIN_URL = "https://media.istockphoto.com/id/1321878632/photo/cloudy-sky-over-beautiful-flood-plain-landscape.webp?b=1&s=170667a&w=0&k=20&c=3nGMfD-sXDLS5jwwLV89TcEstDn00juZJ--18xie-UM=";


    return (
        <div className="InfoBox">
       <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL : info.temp> 15 ? HOT_URl: COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} 
        
        </Typography>
        <Typography variant="body2" color="text.secondary">
       <p>Temperature= {info.temp}&deg;C </p>
       <p>Humidity= {info.humidity}</p>
       <p>Min Temp= {info.tempMin}&deg;C</p>
       <p>Max Temp= {info.tempMax}&deg;C</p>
       <p> The weather can be described as <i>{info.weather}</i>and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
  
    </Card>

  </div>

        </div>
        
    )
}