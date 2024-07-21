# Heatwave DB Instance

In this step we will create an instance of HeatWave cluster of MySQL4 Shape with HeatWave 512 Lakehouse enabled.

make sure to write down on the side the: private_ip, username, password

1. Click **Databases** &rarr; **Heatwave** &rarr; **DB Systems**

   ![drawing](./SS/heatwave/step1.png)

1. Click **Create DB System**

   ![drawing](./SS/heatwave/step3.png)

1. Select **Development or testing** and give it the name **my_prv_gen_ai**

   ![drawing](./SS/heatwave/step4.png)

1. Enter **Username** and **Password** (don't use @ in the password). save it in a a safe place. (Leave **Standalone**)

   ![drawing](./SS/heatwave/step5.png)

1. Select your **VCN** and the **PUBLIC** subnet

   ![drawing](./SS/heatwave/step6.png)

1. Make sure **Enable Heatwave Cluster** is ticked and click on **Change Shape**

   ![drawing](./SS/heatwave/step7.png)

1. Select **MySQL.4** is ticked and click on **Select a shape**

   ![drawing](./SS/heatwave/step8.png)

1. click on **Change HeatWave Shape**

   ![drawing](./SS/heatwave/step9.png)

1. click on **Change shape**

   ![drawing](./SS/heatwave/step10.png)

1. Select **HeatWave.512GB** is ticked and click on **Select a shape**

   ![drawing](./SS/heatwave/step11.png)

1. Tick on **HeatWave Lakehouse** and **Save Changes**

   ![drawing](./SS/heatwave/step12.png)

1. Make sure it's the same config like here.

   ![drawing](./SS/heatwave/step13.png)

1. Tick off the **Enable automatic backups**

   ![drawing](./SS/heatwave/step15.png)

1. Click on **Show advanced options**, go to **Configurations** tab

   ![drawing](./SS/heatwave/step16.png)

1. Select **Database version** - 9.0.0 - Innovation

   ![drawing](./SS/heatwave/step17.png)

1. Click **Create** to start the creation of the db

1. Wait for the provisioning to complete

   ![drawing](./SS/heatwave/step18.png)

1. Scroll down and click on **EndPoints** on the left.

   ![drawing](./SS/heatwave/step19.png)

1. Copy the **Address** (private IP address)

   ![drawing](./SS/heatwave/step20.png)
