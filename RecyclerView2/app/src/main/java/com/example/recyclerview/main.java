package com.example.recyclerview;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;

import java.util.ArrayList;

public class main extends AppCompatActivity {

    ArrayList<recyclerview_list> recyclerview_lists;
    RecyclerView recyclerView;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        recyclerView = findViewById(R.id.recyclerView);
        recyclerView.setHasFixedSize(true);
        recyclerView.setLayoutManager(new GridLayoutManager(this, 2));

        recyclerview_lists = new ArrayList<recyclerview_list>();
        recyclerview_lists.add(new recyclerview_list(R.drawable.english, "English"));
        recyclerview_lists.add(new recyclerview_list(R.drawable.art, "Art"));
        recyclerview_lists.add(new recyclerview_list(R.drawable.sport, "Sport"));
        recyclerview_lists.add(new recyclerview_list(R.drawable.history, "History"));
        recyclerview_lists.add(new recyclerview_list(R.drawable.geography, "Geography"));
        recyclerview_lists.add(new recyclerview_list(R.drawable.math, "Math"));
        recyclerview_lists.add(new recyclerview_list(R.drawable.tech, "Tech"));
        recyclerview_lists.add(new recyclerview_list(R.drawable.science, "Science"));




        recyclerview_adapter recyclerviewAdapter = new recyclerview_adapter(recyclerview_lists, this);
        recyclerView.setAdapter(recyclerviewAdapter);


    }
}