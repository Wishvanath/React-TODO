import React, { Component, Fragment } from 'react'
import './style.scss';
import {Link} from 'react-router-dom';
export default class Todo extends Component {
    // constructor def
    constructor(props){
        super(props)
        this.state ={
            items: [],
            text: ""
        }
    }
    //end of constructor def


    //event defination
    addTask(event){
       event.preventDefault();
       //get the new item
       var newItem = {
           id: Date.now(),
           text: this.state.text,
           done: false
       }
       this.setState((data) => ({
        items: data.items.concat(newItem),
        text: ""
      }));
      
    }
    //input handle change
    handleChange(event){
        this.setState({text: event.target.value})
        
    }

    handleDeleteItem(itemId) {
        console.log(itemId);
        var updatedItems = this.state.items.filter(item => {
          return item.id !== itemId;
        });
        
        this.setState({
          items: [].concat(updatedItems)
        });
      }

      

    render() {
        return (
          <Fragment>
            <div className='container'>
              <h2 className='text-center mt-3'>React TODO </h2>
              <div className='row'>
                <div className='col-sm-6 mt-5 mb-3 mx-auto'>
                  <form>
                    <input
                      type='text'
                      name='txt_input'
                      className='txt_input'
                      onChange={this.handleChange.bind(this)}
                      value={this.state.text}
                    />
                    <button
                      className='btn btn-success ml-2 btn_add'
                      onClick={this.addTask.bind(this)}
                    >
                      Add Items
                    </button>
                  </form>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-6 mx-auto todo_inner'>
                  {/* {JSON.stringify(this.state.items)} */}
                  {this.state.items.map((data, index) => (
                    <li key={index} className='todo_list_item d-flex w-100'>
                    <p className="text">{data.text}</p>
                      <div className='button_control'>
                        <Link to={`/edit/${data.text}/${data.id}`}><i className='far fa-edit btn_ico'></i></Link>
                        <i className='far fa-trash-alt btn_ico' onClick={this.handleDeleteItem.bind(this,data.id)}></i>
                      </div>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </Fragment>
        );
    }
}
