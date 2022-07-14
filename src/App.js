import React, {Component} from 'react';
import classes from './App.module.css';
import ProductData from './Utils/ProductData';
import ProductDetails from './Product Details/ProductDetails';
import ProductPreview from './Product Preview/ProductPreview';
import Topbar from './Topbar/Topbar';

class App extends Component{

  state = {
    productData : ProductData,
    currentPreviewImagePos: 0,
    // showHeartBeatSection: false,
    currentSelectedFeature: 0,
  }
  // const currentHour = new Date().getHours > 9 ? new Date().getHours() : '0' + new Date().getHours();
  // const currentMinute = new Date().getMinutes > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes;

  onColorOptionClick = (pos) => {
    this.setState({currentPreviewImagePos : pos});
  }

  onFeatureItemClick = (pos) => {
    // let updatedState = false;
    // if(pos === 1){
    //   updatedState = true;
    // }
    // this.setState({showHeartBeatSection: updatedState})
    this.setState({currentSelectedFeature : pos});
  }

  render(){
    return (
      <div className="App">
        <Topbar />
      
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} currentSelectedFeature={this.state.currentSelectedFeature}/>
          </div> 


          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currentPreviewImagePos={this.state.currentPreviewImagePos} onFeatureItemClick={this.onFeatureItemClick} currentSelectedFeature= {this.state.currentSelectedFeature}/>
          </div>
          
        </div>
      </div>
    );
  }
  
  
}

export default App;
