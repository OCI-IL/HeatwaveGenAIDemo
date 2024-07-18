# Creating VCN

1.  Open the navigation menu and click **Networking** &rarr; **Virtual Cloud Networks**
    ![drawing](./SS/vcn/1.png)

2.  Click on **Start VCN Wizard**

    ![drawing](./SS/vcn/2.png)

3.  Click on **Start VCN Wizard**

    ![drawing](./SS/vcn/3.png)

4.  Fill the name of the VCN and leave everything else as default

    ![drawing](./SS/vcn/4.png)

5.  Scroll-down and click on **Create**

    ![drawing](./SS/vcn/5.png)

6.  Click on **View VCN**

    ![drawing](./SS/vcn/6.png)

7.  Under Resources, select **Subnets** and click **Public Subnet-<your_vcn_name>**

         ![drawing](./SS/vcn/vcn_public_subnet.png)

    3. Under Resources, select **Security Lists** and click **Default Security List for <your_vcn_name>**

       ![drawing](./SS/vcn/public_security_list.png)

    4. Click on **Add Ingress Rules**

    5. Enter the following:

       1. **Source Type:** Select CIDR
       2. **Source CIDR:** Enter 0.0.0.0/0
       3. **IP Protocol:** Select TCP
       4. **Destination Port Range:** Enter 3001,3003
       5. Click **Save Changes**

       ![drawing](./SS/vcn/open_port_5000.png)

8.  Enter the following:

    1.  **Source Type:** Select CIDR
    2.  **Source CIDR:** Enter 10.0.0.0/16
    3.  **IP Protocol:** Select TCP
    4.  **Destination Port Range:** Enter 3306
    5.  Click **Save Changes**

    ![drawing](./SS/vcn/open_port_5000.png)
