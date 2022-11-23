











<div className="" style={{backgroundColor: '#E3E4E4'}} >
      <NavBarAdmin/>
     <div class="form-group">
    <label for="exampleFormControlInput1">Name</label>
    <input value={name} onChange={(e)=>setName(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
   <div class="custom-file mt-2 mb-2">
    <input onChange={(e)=>setImage(e.target.files[0])} type="file" class="custom-file-input" id="inputGroupFile01"/>
    <label class="custom-file-label" for="inputGroupFile01">Choose image</label>
  </div>
   <div class="form-group">
    <label for="exampleFormControlInput1">Description</label>
    <input value={description} onChange={(e)=>setDescription(e.target.value)} type="textfeild" class="form-control" id="exampleFormControlInput1" placeholder="put any description"/>
  </div>
  <button onClick={submit} className="btn btn-info mt-3" >Sumbit</button>

{!loading ? <Stack spacing={3} sx={{ width: 500 , margin:5}}>
      <Autocomplete
        limitTags={3}
        onChange={(event, value) => setProducts(value)} // prints the selected value
        multiple
        autoHighlight
        id="tags-standard"
        options={productsList}
        getOptionLabel={(option) => option.name}
        defaultValue={products}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Products"
            placeholder="Product"
          />
        )}
      />
    </Stack>
:<PropagateLoader color="#36d7b7" />}
   {/* Button trigger modal */}
  <button
    type="button"
    className="btn btn-danger"
    data-toggle="modal"
    data-target="#exampleModal"
  >
    Delete
  </button>
  {/* Modal */}
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
        <DeleteCategory id={id} admin={admin} name={name}/>
    </div>
  </div>

    </div>