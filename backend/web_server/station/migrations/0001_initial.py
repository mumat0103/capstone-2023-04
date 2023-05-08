# Generated by Django 4.2.1 on 2023-05-05 16:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Stations',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('station_name', models.CharField(max_length=10)),
                ('heading_to', models.CharField(max_length=100)),
                ('arrival_time', models.IntegerField(blank=True, null=True)),
                ('subway_id', models.CharField(default='0000', max_length=4)),
            ],
            options={
                'verbose_name': 'Stations',
                'verbose_name_plural': 'Stations',
                'db_table': 'stations',
            },
        ),
        migrations.CreateModel(
            name='Times',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('request_time', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'Times',
                'verbose_name_plural': 'Times',
                'db_table': 'times',
            },
        ),
    ]
