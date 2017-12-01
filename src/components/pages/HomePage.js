import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import {Container, Image,  Menu,  Visibility, Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import * as actions from '../../actions/auth';



const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '2em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
};

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
};

// const overlayStyle = {
//   float: 'left',
//   margin: '0em 3em 1em 0em',
// };

// const fixedOverlayStyle = {
//   ...overlayStyle,
//   position: 'fixed',
//   top: '80px',
//   zIndex: 10,
// };

// const overlayMenuStyle = {
//   position: 'relative',
//   left: 0,
//   transition: 'left 0.5s ease',
// };

// const fixedOverlayMenuStyle = {
//   ...overlayMenuStyle,
//   left: '800px',
// };

// const LeftImage = () => (
//   <Image
//     floated='left'
//     size='medium'
//     src='/assets/images/wireframe/square-image.png'
//     style={{ margin: '2em 2em 2em -4em' }}
//   />
// )

// const RightImage = () => (
//   <Image
//     floated='right'
//     size='medium'
//     src='/assets/images/wireframe/square-image.png'
//     style={{ margin: '2em -4em 2em 2em' }}
//   />
// );

class HomePage extends Component {

    state = {
         menuFixed: false,
         overlayFixed: false,
    }

      stickOverlay = () => this.setState({ overlayFixed: true })

      stickTopMenu = () => this.setState({ menuFixed: true })

      unStickOverlay = () => this.setState({ overlayFixed: false })

      unStickTopMenu = () => this.setState({ menuFixed: false })

    render() {
        return (
        	<div>
                <Visibility
                  onBottomPassed={this.stickTopMenu}
                  onBottomVisible={this.unStickTopMenu}
                  once={true}>
                    <Menu
                        borderless
                        fixed={"top"}
                        style={this.state.menuFixed ? fixedMenuStyle : menuStyle}>
                        <Container>
                              <Menu.Item>
                                <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
                              </Menu.Item>
                              <Menu.Item header>Home Page</Menu.Item>
                              <Menu.Item as='a'>About</Menu.Item>
                              <Menu.Item as='a'>Blog</Menu.Item>
                              <Menu.Item as='a'>Articles</Menu.Item>
                              <Menu.Menu position='right'>
                                {this.props.isAuthenticated ? <Menu.Item as='a' onClick={() => this.props.logout()}><Button primary>Logout</Button></Menu.Item> : <Menu.Item><Button inverted><Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link></Button></Menu.Item>}                        
                              </Menu.Menu>
                        </Container>
                    </Menu>
                </Visibility>
		  	</div>

            
        );
    }
}

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token,
    }
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);
