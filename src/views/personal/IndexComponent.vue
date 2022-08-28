<template>
    <section class="page-header">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="content">
            <h1 class="page-name">Dashboard</h1>
            <ol class="breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li class="active">my account</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>

    <section class="user-dashboard page-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-12">

          <ul class="list-inline dashboard-menu text-center">
            <li><a class="collapse-btn" data-toggle="collapse" data-target="#profile" aria-expanded="false" aria-hidden="false" aria-controls="profile">Profile</a></li>
            <li><a class="collapse-btn" data-toggle="collapse" data-target="#orders" aria-expanded="false" aria-hidden="true" aria-controls="orders">Orders</a></li>
            <li><a class="collapse-btn" data-toggle="collapse" data-target="#address" aria-expanded="false" aria-hidden="true" aria-controls="address">Address</a></li>
            <li><a class="collapse-btn" data-toggle="collapse" data-target="#wishlist" aria-expanded="false" aria-hidden="true" aria-controls="wishlist">Wishlist</a></li>
            <li><a class="collapse-btn" data-toggle="collapse" data-target="#comment" aria-expanded="false" aria-hidden="true" aria-controls="comment">Comments and review</a></li>
          </ul>

          <!-- Profile Details -->
          <div class="dashboard-wrapper dashboard-user-profile" id="profile">
            <div class="media">
              <div class="pull-left text-center" href="#!">
                <img class="media-object user-img" src="src/assets/images/avater.jpg" alt="Image">
                <a href="#x" class="btn btn-transparent mt-20">Change Image</a>
              </div>
              <div class="media-body">
                <ul class="user-profile-list">
                  <li><span>Full Name:</span>Johanna Doe</li>
                  <li><span>Country:</span>USA</li>
                  <li><span>Email:</span>mail@gmail.com</li>
                  <li><span>Phone:</span>+880123123</li>
                  <li><span>Date of Birth:</span>Dec , 22 ,1991</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Orders -->
          <div class="dashboard-wrapper user-dashboard collapse" id="orders">
            <div class="table-responsive">
              <table class="table">
                <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Items</th>
                  <th>Total Price</th>
                  <th>Status</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>#451231</td>
                  <td>Mar 25, 2016</td>
                  <td>2</td>
                  <td>$99.00</td>
                  <td><span class="label label-primary">Processing</span></td>
                  <td><a href="order.html" class="btn btn-default">View</a></td>
                </tr>
                <tr>
                  <td>#451231</td>
                  <td>Mar 25, 2016</td>
                  <td>3</td>
                  <td>$150.00</td>
                  <td><span class="label label-success">Completed</span></td>
                  <td><a href="order.html" class="btn btn-default">View</a></td>
                </tr>
                <tr>
                  <td>#451231</td>
                  <td>Mar 25, 2016</td>
                  <td>3</td>
                  <td>$150.00</td>
                  <td><span class="label label-danger">Canceled</span></td>
                  <td><a href="order.html" class="btn btn-default">View</a></td>
                </tr>
                <tr>
                  <td>#451231</td>
                  <td>Mar 25, 2016</td>
                  <td>2</td>
                  <td>$99.00</td>
                  <td><span class="label label-info">On Hold</span></td>
                  <td><a href="order.html" class="btn btn-default">View</a></td>
                </tr>
                <tr>
                  <td>#451231</td>
                  <td>Mar 25, 2016</td>
                  <td>3</td>
                  <td>$150.00</td>
                  <td><span class="label label-warning">Pending</span></td>
                  <td><a href="order.html" class="btn btn-default">View</a></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Addresses -->
          <div class="dashboard-wrapper user-dashboard collapse" id="address">
            <div class="table-responsive">
              <table class="table">
                <thead>
                <tr>
                  <th>Company</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Country</th>
                  <th class="col-md-2 col-sm-3">Phone</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Nokia</td>
                  <td>Adam Smith</td>
                  <td>9/4 C Babor Road, Mohammad Pur, Dhaka</td>
                  <td>Bangladesh</td>
                  <td>+884 5452 6452</td>
                  <td>
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-default"><i class="tf-pencil2" aria-hidden="true"></i></button>
                      <button type="button" class="btn btn-default"><i class="tf-ion-close" aria-hidden="true"></i></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Samsung</td>
                  <td>Adam Smith</td>
                  <td>9/4 C Babor Road, Mohammad Pur, Dhaka</td>
                  <td>Bangladesh</td>
                  <td>+884 5452 6452</td>
                  <td>
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-default"><i class="tf-pencil2" aria-hidden="true"></i></button>
                      <button type="button" class="btn btn-default"><i class="tf-ion-close" aria-hidden="true"></i></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Motorola</td>
                  <td>Adam Smith</td>
                  <td>9/4 C Babor Road, Mohammad Pur, Dhaka</td>
                  <td>Bangladesh</td>
                  <td>+884 5452 6452</td>
                  <td>
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-default"><i class="tf-pencil2" aria-hidden="true"></i></button>
                      <button type="button" class="btn btn-default"><i class="tf-ion-close" aria-hidden="true"></i></button>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Wishlist -->
          <div class="dashboard-wrapper user-dashboard collapse" id="wishlist">
            <div class="table-responsive">
              <table class="table">
                <thead>
                <tr>
                  <th>Company</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Country</th>
                  <th class="col-md-2 col-sm-3">Phone</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Nokia</td>
                  <td>Adam Smith</td>
                  <td>9/4 C Babor Road, Mohammad Pur, Dhaka</td>
                  <td>Bangladesh</td>
                  <td>+884 5452 6452</td>
                  <td>
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-default"><i class="tf-pencil2" aria-hidden="true"></i></button>
                      <button type="button" class="btn btn-default"><i class="tf-ion-close" aria-hidden="true"></i></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Samsung</td>
                  <td>Adam Smith</td>
                  <td>9/4 C Babor Road, Mohammad Pur, Dhaka</td>
                  <td>Bangladesh</td>
                  <td>+884 5452 6452</td>
                  <td>
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-default"><i class="tf-pencil2" aria-hidden="true"></i></button>
                      <button type="button" class="btn btn-default"><i class="tf-ion-close" aria-hidden="true"></i></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Motorola</td>
                  <td>Adam Smith</td>
                  <td>9/4 C Babor Road, Mohammad Pur, Dhaka</td>
                  <td>Bangladesh</td>
                  <td>+884 5452 6452</td>
                  <td>
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-default"><i class="tf-pencil2" aria-hidden="true"></i></button>
                      <button type="button" class="btn btn-default"><i class="tf-ion-close" aria-hidden="true"></i></button>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Comments and review -->
          <div class="dashboard-wrapper user-dashboard collapse" id="comment">
            <div class="table-responsive">
              <table class="table">
                <thead>
                <tr>
                  <th>Company</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Country</th>
                  <th class="col-md-2 col-sm-3">Phone</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Nokia</td>
                  <td>Adam Smith</td>
                  <td>9/4 C Babor Road, Mohammad Pur, Dhaka</td>
                  <td>Bangladesh</td>
                  <td>+884 5452 6452</td>
                  <td>
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-default"><i class="tf-pencil2" aria-hidden="true"></i></button>
                      <button type="button" class="btn btn-default"><i class="tf-ion-close" aria-hidden="true"></i></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Samsung</td>
                  <td>Adam Smith</td>
                  <td>9/4 C Babor Road, Mohammad Pur, Dhaka</td>
                  <td>Bangladesh</td>
                  <td>+884 5452 6452</td>
                  <td>
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-default"><i class="tf-pencil2" aria-hidden="true"></i></button>
                      <button type="button" class="btn btn-default"><i class="tf-ion-close" aria-hidden="true"></i></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Motorola</td>
                  <td>Adam Smith</td>
                  <td>9/4 C Babor Road, Mohammad Pur, Dhaka</td>
                  <td>Bangladesh</td>
                  <td>+884 5452 6452</td>
                  <td>
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-default"><i class="tf-pencil2" aria-hidden="true"></i></button>
                      <button type="button" class="btn btn-default"><i class="tf-ion-close" aria-hidden="true"></i></button>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>


        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from "../../api";
export default {
  name: "IndexComponent",

  mounted(){
    this.getUserInfo();
    this.testRequest()
  },

  data(){
    return{
      user:[],
    }
  },

  methods:{
    testRequest(){
      api.get('http://127.0.0.1:8000/api/client/test')
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        })
    },

    getUserInfo(){
      if(localStorage.getItem('user')){
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user);
      }else{
        console.log('user not register')
      }
    },

  }

}
</script>

<style scoped>
.collapse-btn:hover{
  background-color: black;
  color: white;
}
</style>