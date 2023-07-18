import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import RecipeItem from './components/RecipeItem';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function App() {

  const recipesRef: any = useRef([])
  const selectedRecipeRef: any = useRef({})
  const [recipes, setRecipes]: any[] = useState([])
  const [formValues, setFormValues]: any = useState({
    name: '',
    ingredients: '',
    instructions: '',
    cookingTime: 0,
    publicationDate: ''
  })

  const onNameChange = (e: any) => setFormValues({...formValues, name : e.target.value})
  const onIngrChange = (e: any) => setFormValues({...formValues, ingredients : e.target.value})
  const onInstChange = (e: any) => setFormValues({...formValues, instructions : e.target.value})
  const onTimeChange = (e: any) => setFormValues({...formValues, cookingTime : e.target.value})
  const onDateChange = (e: any) => setFormValues({...formValues, publicationDate : e.target.value})

  const saveChanges = (): any => {
    if(formValues.name == '' || formValues.ingredients == '' || formValues.instructions == ''
      || formValues.cookingTime == '' || formValues.publicationDate == '')
    {
        //clearChanges(); (dont know if form should be cleared if there is an attempt submitting it without a filled field)
        return;
    }
    if(!selectedRecipeRef.current.name )
    {
      recipesRef.current.push(<RecipeItem id={recipesRef.current.length+1}
        name={`${formValues.name}`}
        ingredients={`${formValues.ingredients}`}
        intructions={`${formValues.instructions}`}
        cookingTime={`${formValues.cookingTime}`}
        publicationDate={`${new Date(formValues.publicationDate).toString()}`}
        selectItem={onSelectItem}
        deleteItem={onDeleteItem}
      />)
      setRecipes(recipesRef.current)
      clearChanges()
      return
    }
    
    recipesRef.current = recipesRef.current.map((recipe: any) => recipe.props.id == selectedRecipeRef.current.id ? (
        { ...recipe, props: { ...formValues, publicationDate: new Date(formValues.publicationDate).toString()} }
      ) : recipe
    )
    setRecipes(recipesRef.current)
    clearChanges()
  }

  const clearChanges = (): any => {
    selectedRecipeRef.current = {}
    setFormValues({
      name: '',
      ingredients: '',
      instructions: '',
      cookingTime: 0,
      publicationDate: ''
    })
  }

  useEffect(() => {

    let currentRecipes = []
    /// randomly generated starter recipes
    for (let i = 1; i <= 2 + Math.floor(Math.random() * 5); i++) {
      currentRecipes.push(<RecipeItem id={i}
        name={`recipe${i}`}
        ingredients="lorem impsun"
        instructions="dolor sit amet"
        cookingTime={20 + Math.floor(Math.random() * 80)}
        publicationDate={new Date().toString()}
        selectItem={onSelectItem}
        deleteItem={onDeleteItem}
      />)
    }
    setRecipes(currentRecipes);
    recipesRef.current = currentRecipes;
  }, [])

  const onSelectItem = (e: any) => {
    selectedRecipeRef.current = 
    recipesRef.current.filter((recipe: any) => recipe.props.id == e.currentTarget.parentElement.id)[0].props
    console.log(selectedRecipeRef.current)
    setFormValues(selectedRecipeRef.current)
  }

  const onDeleteItem = (e: any) => {
    let id = e.target.parentElement.parentElement.id;
    recipesRef.current = recipesRef.current.filter((recipe: any) => recipe.props.id != id)
      .map((recipe: any) => recipe.props.id > id ? (
        { ...recipe, props: { ...recipe.props, id: recipe.props.id - 1 } }
      ) : recipe
      )

    if(id == selectedRecipeRef.current.id)
    {
      clearChanges();
    }
    setRecipes(recipesRef.current)
  }
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Row>
          <Col>
            <div className="content-list">
              {recipes}
            </div>
          </Col>
          <Col>
            <div className="content-details">
              {formValues && 
              <Form noValidate >
                <Form.Group>
                  <Form.Control type="text" id="field1" placeholder="name" value={
                    formValues.name} onChange={onNameChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Control type="text" id="field2" placeholder="ingredients" value={
                    formValues.ingredients} onChange={onIngrChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Control type="text" id="field3" placeholder="instructions" value={
                    formValues.instructions} onChange={onInstChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="number" id="field4" placeholder="cooking time" value={
                    formValues.cookingTime} onChange={onTimeChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="date" id="field5"
                    value={formValues.publicationDate} onChange={onDateChange}/>
                </Form.Group>
                <Button variant="primary" id="saveButton" onClick={saveChanges}>Save</Button>
                <Button variant="info" id="clearButton" onClick={clearChanges}>Clear</Button>
              </Form>
              }
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
