import tensorflow as tf

# Define your custom optimizer class
class CustomAdamOptimizer(tf.keras.optimizers.Adam):
    pass

# Register the custom optimizer
tf.keras.utils.get_custom_objects()['CustomAdamOptimizer'] = CustomAdamOptimizer
