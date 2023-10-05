<template>
  <div class="modal fade" id="rectangleModal" tabindex="-1" role="dialog" aria-labelledby="rectangleModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">

        <div class="modal-header">
         
            <h5 class="modal-title" id="rectangleModalLabel">Add Mapping</h5>
         
        </div>
        <div class="modal-body">
          <form>
            <div class="row form-group">
              <label for="Key" class="col-md-3">Key</label>
              <div class="col-md-9">
                <input type="text" class="form-control" id="Key" v-model="Key" />
              </div>
            </div>

            <div class="row form-group">
              <label for="DataTypes" class="col-md-3">Data Types</label>
              <div class="col-md-9">
                <select class="form-control" id="DataTypes" v-model="DataTypes">
                  <option value="alphanumeric">Alphanumeric</option>
<option value="alphanumeric_with_space">Alphanumeric With Space</option>
<option value="checkbox">Checkbox</option>
<option value="city">City</option>
<option value="cod">COD</option>
<option value="date">Date</option>
<option value="email">Email</option>
<option value="fax">Fax</option>
<option value="npi">NPI</option>
<option value="numeric">Numeric</option>
<option value="phone">Phone</option>
<option value="signature">Signature</option>
<option value="state">State</option>
<option value="text">Text</option>
<option value="Zip">Zip</option>
                 
                </select>
              </div>
            </div>

            <div class="row form-group">
              <label for="Categories" class="col-md-3">Categories</label>
              <div class="col-md-9">
                <select class="form-control" id="Categories" v-model="Categories">
                  <option value="">Default</option>
                  <option value="block">Block</option>
                  
                </select>
              </div>
            </div>

            <div class="row form-group">
  <label for="Extraction" class="col-md-3">Extraction</label>
  <div class="col-md-9 d-flex flex-row">
    <div class="form-check mr-3">
      <input type="radio" class="form-check-input" id="ExtractionYes" value="true" v-model="Extraction">
      <label class="form-check-label" for="ExtractionYes">Yes</label>
    </div>
    <div class="form-check">
      <input type="radio" class="form-check-input" id="ExtractionNo" value="false" v-model="Extraction">
      <label class="form-check-label" for="ExtractionNo">No</label>
    </div>
  </div>
</div>

            <div class="row form-group">
              <label for="Case" class="col-md-3">Case</label>
              <div class="col-md-9">
                <select class="form-control" id="Case" v-model="Case">
                  <option value="">Select Case</option>
                  <option value="capitalize">Capitalize the first letter of the field</option>
                  <option value="upper_case">Upper Case</option>
                  <option value="lower_case">Lower Case</option>
                  
                </select>
              </div>
            </div>

            <div class="row form-group">
    <label for="required" class="col-md-3">Required</label>
    <div class="col-md-9 d-flex flex-row">
      <div class="form-check mr-3">
        <input type="radio" class="form-check-input" id="RequiredYes" value="true" v-model="Required">
        <label class="form-check-label" for="RequiredYes">Yes</label>
      </div>
      <div class="form-check">
        <input type="radio" class="form-check-input" id="RequiredNo" value="false" v-model="Required">
        <label class="form-check-label" for="RequiredNo">No</label>
      </div>
    </div>
  </div>
            <div class="row form-group">
              <label for="Description" class="col-md-3">Description</label>
              <div class="col-md-9">
                <textarea class="form-control" id="Description" v-model="Description"></textarea>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary" @click="saveRectangle">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>


  
  <script>
  export default {
    data() {
      return {
        Key: '',
       DataTypes: '',
       Categories:'',
       Extraction:'',
       Case:'',
       Description:'',
       Required:'',
      };
      
    },
    methods: {
      saveRectangle() {
        this.$emit('rectangleSaved', {
          Key: this.Key,
          DataTypes: this.DataTypes,
          Categories: this.Categories,
          Extraction: this.Extraction,
          Case: this.Case,
          Required: this.Required,
          Description: this.Description,
        });
        this.$el.classList.remove('show');
        this.$el.style.display = 'none';

        this.Key= '';
        this.DataTypes = '';
        this.Categories = '';
        this.Extraction = '';
        this.Case = '';
        this.Description = '';
        this.Required = '';
      },
    },
  };
  </script>
  