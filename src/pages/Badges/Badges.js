import React from "react"
import SkeletonItem from "../../components/SkeletonItem"
import BadgesList from "../../components/BadgesList"
import api from "../../libs/api"
import "./Badges.css"

class Badges extends React.Component{

    state={
        loading:true,
        error: null,
        data: undefined,
    }

    componentDidMount(){
        this.fetchData();
        this.setFetchInterval();
    }

    fetchData = async() =>{
        this.setState({loading: true, error: null})
        try{
            const data = await api.badges.list();
            data.reverse()
            this.setState({loading: false, data: data})

        }catch(error){
            this.setState({loading: false, error: error, data: []})
        }
    };
    setFetchInterval(){
       this.interval = setInterval(this.fetchData, 3000)
    }

    componentWillUnmount(){
        clearInterval(this.setFetchInterval)
    }

    render(){
        if(this.state.loading===true && !this.state.data){
            return <SkeletonItem></SkeletonItem>
        }

        return(
            <React.Fragment>
                <div className="Badges__container"></div>
                <BadgesList badges={this.state.data}></BadgesList>
            </React.Fragment>
        )
    }
}

export default Badges;