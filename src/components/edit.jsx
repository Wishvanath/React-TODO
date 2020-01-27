import React, { Component, Fragment } from 'react';

export default class EditItem extends Component {
  //constructor def
  constructor() {
    super();
    this.state = {
        items: [

        ]
    };
  }

  //event def
  componentDidMount(){
    var newItem = {
        id: this.props.match.params.id,
        text:this.props.match.params.name,
        done: false
    }
    this.setState({items: newItem})

  }

  render() {
      console.log(this.props.match.params.name)
      console.log(this.props.match.params.id)

    return (
      <Fragment>
        <div className='container'>
          <h2 className='text-center mt-3'>Update Items </h2>
          <div className='row'>
            <div className='col-sm-6 mx-auto'>
              <form>
                <input
                  type='text'
                  name='txt_input'
                  className='txt_input'
                  value={this.state.items.text}
                />
                <button
                  className='btn btn-success ml-2 btn_add'
                >
                 Update
                </button>
              </form>
              {JSON.stringify(this.state.items)}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
