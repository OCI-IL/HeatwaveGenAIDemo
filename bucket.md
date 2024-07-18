# Creating Bucket and PARs

1. Click **Storage** &rarr; **Object Storage & Archive Storage** &rarr; **Buckets**

   ![drawing](./SS/bucket/nav_bar_buckets.png)

1. Click **Create Bucket** (make sure you're in the right compartment)

   ![drawing](./SS/bucket/create_bucket_button.png)

1. Enter a name for your bucket and click **Create**

   ![drawing](./SS/bucket/create_new_bucket.png)

1. Click on **Pre-Authenticated Requests** on the left and then click on **Create Pre-Authenticated Request**.

   ![drawing](./SS/bucket/par1.png)

1. Fill the name: par-db, select **Bucket**, select **Permit Object reads** and tick **Enable Object Listing**. give it Expiration of more than 30 days. Click **Create Pre-Authenticated Request** button at the bottom.
   ![drawing](./SS/bucket/par2.png)

1. copy the par-db URL and save it on the side for later use
   ![drawing](./SS/bucket/par3.png)

1. Click again on **Pre-Authenticated Requests** on the left and then click on **Create Pre-Authenticated Request**.

   ![drawing](./SS/bucket/par1.png)

1. Fill the name: par-web, select **Bucket**, select **Permit Object writes**. give it Expiration of more than 30 days. Click "Create Pre-Authenticated Request" button at the bottom.
   ![drawing](./SS/bucket/par4.png)

1. copy the par-web url and save it on the side for later use
   ![drawing](./SS/bucket/par5.png)
